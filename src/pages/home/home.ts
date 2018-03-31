import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
export class HomePage{
  map: GoogleMap;
  constructor(public navCtrl: NavController, private geolocation : Geolocation, public toastCtrl: ToastController ) {
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

        this.presentToast('La radiación está muy fuerte');

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

  presentToast(message: string = 'Cada 2h aplicate el bloqueador para una completa proteccion') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'button'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }

}
