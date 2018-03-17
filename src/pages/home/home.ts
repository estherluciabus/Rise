import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';
import{ PreguntasService} from '../../shared/preguntas.service';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 LatLng
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage implements OnInit {
  map: GoogleMap;
  constructor(private geolocation : Geolocation, public toastCtrl: ToastController,public preguntasService:PreguntasService) {
  }

  ngOnInit() {
    this.preguntasService.getPreguntas().subscribe(preguntas => {
      console.log(preguntas)
    })
  }

  loadMap(): void {

    this.geolocation.getCurrentPosition().then(position => {
      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },

          zoom: 18,
          tilt: 0
        },
        gestures: {
          scroll: true
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

        this.map.on(GoogleMapsEvent.MAP_LONG_CLICK)
          .subscribe((latLng: LatLng) => {

            const position = JSON.parse(latLng.toString());

            this.map.addMarker(
              {
                animation: 'DROP',
                position: position
              }
            ).catch(err => alert(err));
          }, err => console.log('err', err));

      });
    }, err => alert(err.message));

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: ' Cada 2h aplicate el bloqueador para una completa proteccion ',
      duration: 3000,
      position: 'button'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }
}
