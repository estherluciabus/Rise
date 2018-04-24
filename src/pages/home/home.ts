<<<<<<< HEAD
import { ToastController } from 'ionic-angular';
import { NavController ,AlertController } from 'ionic-angular';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component} from '@angular/core';
=======
<<<<<<< HEAD
 import { ToastController } from 'ionic-angular';
 import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';
 import { ToastController} from 'ionic-angular';
 import { FormControl} from "@angular/forms";
 import { NavController,ModalController } from 'ionic-angular';
 import {  Component, NgZone, ElementRef, OnInit, ViewChild} from '@angular/core';
 import {
=======
import { ToastController} from 'ionic-angular';
import { FormControl} from "@angular/forms";
import { NavController } from 'ionic-angular';
import { Component, NgZone, ElementRef, ViewChild} from '@angular/core';
>>>>>>> c85444ad57ce97d6679775f34a4d334bc1448639
import { BloqueadoresPage } from '../../pages/bloqueadores/bloqueadores';
import {
>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  LatLng
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ClimaService } from '../../shared/clima.service';
// import { LocalNotifications } from '@ionic-native/local-notifications';

import { MapsAPILoader } from '@agm/core';
// import {AutocompletePage} from './autocomplete';
import { } from 'googlemaps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {


  fabs = [
    {
      fabclass: 'uno',
      miniClass: 'uno1',
      fondo: '#64FF00',
      bordes: '#FFFFFF solid 2px',
      imagenes: [
        'assets/img/lente.png'
      ],
      backgroundColor: 'rgba(17, 128, 66, 0.93)',
      riesgo: 'Bajo',
      Limitedeexposicion: '60',
      radiacionmaxima: 2,
      radiacionminima: 1,
      active: false
    },
    {
      fabclass: 'dos',
      miniClass: 'dos2',
      fondo: '#FFF81C',
      bordes: '#FFFFFF solid 2px',
      imagenes: [
        'assets/img/lente.png',
        'assets/img/umbrella.png'
      ],
      backgroundColor: 'rgba(143, 143, 23, 0.89)',
      riesgo: 'Moderado',
      Limitedeexposicion: '45',
      radiacionmaxima: 5,
      radiacionminima: 3,
      active: false
    },
    {
      fabclass: 'tres',
      miniClass: 'tres3',
      fondo: '#FF6F17',
      bordes: '#FFFFFF solid 2px',
      imagenes: [
        'assets/img/lente.png',
        'assets/img/sombrero mujer.png',
        'assets/img/icono.png'
      ],
      backgroundColor: 'rgba(189, 103, 26, 0.9)',
      riesgo: 'Alto',
      Limitedeexposicion: '30',
      radiacionmaxima: 7,
      radiacionminima: 6,
      active: false
    },
    {
      fabclass: 'cuatro',
      miniClass: 'cuatro4',
      fondo: '#FF3F3F',
      bordes: '#FFFFFF solid 2px',
      imagenes: [
        'assets/img/lente.png',
        'assets/img/sombrero mujer.png',
        'assets/img/icono.png',
        'assets/img/ropa.png',
        'assets/img/sombra.jpg'
      ],

      backgroundColor: 'rgba(177, 55, 35, 0.9)',
      riesgo: 'Muy alto',
      Limitedeexposicion: '25',
      radiacionmaxima: 10,
      radiacionminima: 8,
      active: false
    },
    {
      fabclass: 'cinco',
      miniClass: 'cinco5',
      fondo: ':#A500A5',
      bordes: '#FFFFFF solid 2px',
      imagenes: [
        'assets/img/lente.png',
        'assets/img/sombrero mujer.png',
        'assets/img/icono.png',
        'assets/img/umbrella.png',
        'assets/img/ropa.png',
        'assets/img/sombra.jpg'
      ],
      backgroundColor: 'rgba(194, 43, 224, 0.9)',
      riesgo: 'Extremadamente alto',
      Limitedeexposicion: '20',
      radiacionmaxima: 20,
      radiacionminima: 11,
      active: false
    }
  ];

    map: GoogleMap;
    temperatura: number;

<<<<<<< HEAD
=======
  map: GoogleMap;
  temperatura: number;
  searchControl: FormControl;
  // address;
  public latitude: number;
  public longitude: number;
  public zoom: number;
<<<<<<< HEAD

  @ViewChild("search")
   public searchElementRef;

  constructor(public navCtrl: NavController,
    constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private geolocation: Geolocation,
    private climaService: ClimaService) {
    private climaService: ClimaService,
     private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private modalCtrl:ModalController
=======
>>>>>>> c85444ad57ce97d6679775f34a4d334bc1448639

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private geolocation: Geolocation,
<<<<<<< HEAD
    private climaService: ClimaService
    // private LocalNotifications:LocalNotifications,
    // public alertCtrl: AlertController,
    // private plt: Platform
  ) {
=======
    private climaService: ClimaService,
     private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    // private modalCtrl:ModalController
>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
  ) {
   //  this.address = {
   //   place: ''
   // };
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
<<<<<<< HEAD
  }
// showAddressModal () {
//   let modal = this.modalCtrl.create(AutocompletePage);
//   let me = this;
//   modal.onDidDismiss(data => {
//     this.address.place = data;
//   });
//   modal.present();
=======
>>>>>>> c85444ad57ce97d6679775f34a4d334bc1448639

  //   this.plt.ready().then((rdy) =>{
  //     this.LocalNotifications.on('click',(notification,state) =>{
  //       let json = JSON.parse ( notification.data);
  //       let alert = this.alertCtrl.create({
  //         title: notification.title,
  //         subTitle :json.mydata
  //       });
  //       alert.present();
  //     });
  //   }
  // );
  }
<<<<<<< HEAD
=======
// showAddressModal () {
//
//
>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
// }
  ionViewDidLoad() {
       //set google maps defaults
       this.zoom = 4;
       this.latitude = 39.8282;
       this.longitude = -98.5795;
<<<<<<< HEAD
=======

       //create search FormControl
       this.searchControl = new FormControl();

       //set current position
       this.setCurrentPosition();

       //load Places Autocomplete
       this.mapsAPILoader.load().then(() => {
           let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
           let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
               types: ["address"]
           });
           autocomplete.addListener("place_changed", () => {
               this.ngZone.run(() => {
                   //get the place result
                   let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                   //verify result
                   if (place.geometry === undefined || place.geometry === null) {
                       return;
                   }

                   //set latitude, longitude and zoom
                   this.latitude = place.geometry.location.lat();
                   this.longitude = place.geometry.location.lng();
                   this.zoom = 12;
               });
           });
       });
   }

     private setCurrentPosition() {
         if ("geolocation" in navigator) {
             navigator.geolocation.getCurrentPosition((position) => {
                 this.latitude = position.coords.latitude;
                 this.longitude = position.coords.longitude;
                 this.zoom = 12;
             });
         }
     }

>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0

       //create search FormControl
       this.searchControl = new FormControl();
>>>>>>> c85444ad57ce97d6679775f34a4d334bc1448639

  loadMap(): void {
       //set current position
       this.setCurrentPosition();


       //load Places Autocomplete
       this.mapsAPILoader.load().then(() => {
           let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
           let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
               types: ["address"]
           });
           autocomplete.addListener("place_changed", () => {
               this.ngZone.run(() => {
                   //get the place result
                   let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                   //verify result
                   if (place.geometry === undefined || place.geometry === null) {
                       return;
                   }

                   //set latitude, longitude and zoom
                   this.latitude = place.geometry.location.lat();
                   this.longitude = place.geometry.location.lng();
                   this.zoom = 12;
               });
           });
       });
   }

     private setCurrentPosition() {
         if ("geolocation" in navigator) {
             navigator.geolocation.getCurrentPosition((position) => {
                 this.latitude = position.coords.latitude;
                 this.longitude = position.coords.longitude;
                 this.zoom = 12;
                 this.climaService.getData(
                     position.coords.latitude,
                     position.coords.longitude
                   );
             });

         }
     }



<<<<<<< HEAD
  loadMap(): void {
=======
>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
    this.geolocation.getCurrentPosition().then(position => {
      this.climaService.getData(
        position.coords.latitude,
        position.coords.longitude
      )
        .subscribe(res => {
          this.fabs.forEach(fab => {
            if (fab.radiacionmaxima > res.pronostico[0].n_indice &&
              fab.radiacionminima <= res.pronostico[0].n_indice) {
              fab.active = true;

            }

            else {
              fab.active = false;
            }

          });

          console.log(this.fabs)

        });



      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: position.coords.latitude,
<<<<<<< HEAD
            lng: position.coords.longitude
=======
>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
            lng: position.coords.longitude,


          },

          zoom: 18,
          tilt: 0

        },
        gestures: {
          scroll: true
        }
      };


      this.map = GoogleMaps.create('map_canvas', mapOptions);

      console.log(position.coords.latitude,
        position.coords.longitude)


      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

         this.presentToast('Espere un momento por favor');

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
  // scheduleNotification(){
  //   this.LocalNotifications.schedule({
  //     id:1,
  //     title:'Atencion',
  //     text:'aplicate el bloqueador para una completa proteccion',
  //     at: new Date(new Date().getTime() + 5 *2000),
  //     data: {mydata:'SunRise'}
  //   }),
  // }


  play() {
    this.navCtrl.push(BloqueadoresPage);
  }


<<<<<<< HEAD
=======

>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
}
