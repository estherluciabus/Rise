import { ToastController} from 'ionic-angular';
import { FormControl} from "@angular/forms";
import { NavController } from 'ionic-angular';
import { Component, NgZone, ElementRef, ViewChild} from '@angular/core';
import { BloqueadoresPage } from '../../pages/bloqueadores/bloqueadores';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  LatLng
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ClimaService } from '../../shared/clima.service';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

// import {ViewController} from 'ionic-angular';
// import {AutocompletePage} from './autocomplete';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {


  fabs = [
  {
    fabclass:'uno',
    miniClass:'uno1',
    imagenes:[
      'assets/img/lente.png'
    ],
    backgroundColor:'rgba(17, 128, 66, 0.93)',
    riesgo:'Bajo',
    Limitedeexposicion:'60',
    radiacionmaxima:2,
    radiacionminima:1,
    active:false
  },
  {
    fabclass:'dos',
    miniClass:'dos2',
    imagenes:[
      'assets/img/lente.png',
      'assets/img/umbrella.png'
    ],
    backgroundColor:'rgba(143, 143, 23, 0.89)',
    riesgo:'Moderado',
    Limitedeexposicion:'45',
    radiacionmaxima:5,
    radiacionminima:3,
    active:false
  },
  {
    fabclass:'tres',
    miniClass:'tres3',
    imagenes:[
      'assets/img/lente.png',
      'assets/img/sombrero mujer.png',
      'assets/img/icono.png',
      'assets/img/umbrella.png'
    ],
    backgroundColor:'rgba(189, 103, 26, 0.9)',
    riesgo:'Alto',
    Limitedeexposicion:'30',
    radiacionmaxima:7,
    radiacionminima:6,
    active:false
  },
  {
    fabclass:'cuatro',
    miniClass:'cuatro4',
    imagenes:[
      'assets/img/lente.png',
      'assets/img/sombrero mujer.png',
      'assets/img/icono.png',
      'assets/img/umbrella.png',
      'assets/img/ropa.png'
    ],

    backgroundColor:'rgba(177, 55, 35, 0.9)',
    riesgo:'Muy alto',
    Limitedeexposicion:'25',
    radiacionmaxima:10,
    radiacionminima:8,
    active:false
  },
  {
    fabclass:'cinco',
    miniClass:'cinco5',
    imagenes:[
      'assets/img/lente.png',
      'assets/img/sombrero mujer.png',
      'assets/img/icono.png',
      'assets/img/umbrella.png',
      'assets/img/ropa.png'
    ],
    backgroundColor:'rgba(194, 43, 224, 0.9)',
    riesgo:'Extremadamente alto',
    Limitedeexposicion:'60',
    radiacionmaxima:20,
    radiacionminima:11,
    active:false
  }
  ];


  map: GoogleMap;
  temperatura: number;
  searchControl: FormControl;
  // address;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;

    constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private geolocation: Geolocation,
    private climaService: ClimaService,
     private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    // private modalCtrl:ModalController
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

  }
// showAddressModal () {
//
//
// }
  ionViewDidLoad() {
       //set google maps defaults
       this.zoom = 4;
       this.latitude = 39.8282;
       this.longitude = -98.5795;

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



  loadMap(): void {


    this.geolocation.getCurrentPosition().then(position => {
      this.climaService.getData(
          position.coords.latitude,
          position.coords.longitude
        )
        .subscribe(res => {
          this.fabs.forEach(fab =>{
            if(fab.radiacionmaxima>res.pronostico[0].n_indice &&
          fab.radiacionminima<=res.pronostico[0].n_indice){
              fab.active=true;
            }else{
              fab.active=false;
            }
          });
          console.log(this.fabs)
         });

      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: position.coords.latitude,
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


      // let modal = this.modalCtrl.create('map_canvas', mapOptions);
      // let me = this;
      // this.map.onDidDismiss(data => {
      //   this.address.place = data;
      // });
      // this.map.present();

      console.log (position.coords.latitude,
      position.coords.longitude)


      // this.searchControl = new FormControl();

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

        // let autocomplete = new GoogleMap.places.Autocomplete(this.searchElementRef.nativeElement, {
        //   types: ["address"]
        // });

        this.presentToast('La radiación está muy fuerte');

        this.map.on(GoogleMapsEvent.MAP_LONG_CLICK)
          .subscribe((latLng: LatLng) => {

            const position = JSON.parse(latLng.toString());

           //  let place: GoogleMap.places.PlaceResult = autocomplete.getPlace();
           //
           //  if (place.geometry === undefined || place.geometry === null) {
           // return;}

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
  play(){
    this.navCtrl.push(BloqueadoresPage);
  }



}
