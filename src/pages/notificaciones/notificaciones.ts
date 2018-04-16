import { Component } from '@angular/core';
import { MitosPage } from '../../pages/mitos/mitos';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html'
})
export class NotificacionesPage {
  item: boolean = null;

  constructor(public navCtrl: NavController) {
  }

    mitos() {
      this.navCtrl.push(MitosPage);
    }
    items :[
      {
          img:'assets/img/La_Roche-Posay.png',
          titulo:'NIÑOS,BEBÉS,ADULTOS,..',

      }
   ];

      // {
      //     img:'assets/img/umbrella.png esto es una ruta de la img',
      //     titulo:'ADULTO',
      //     descripcion:'poner info'
      // },
      // {
      //     img:'assets/img/umbrella.png',
      //     titulo:'BEBES',
      //     descripcion:'Muy alta protección. Acabado seco. Sin perfume'
      // }
      // {
      //     img:'assets/img/umbrella.png',
      //     titulo:'ANTHELOS XL GEL CREMA TOQUE SECO',
      //     descripcion:'Muy alta protección. Acabado seco. Sin perfume'
      // },
      // {
      //     img:'assets/img/umbrella.png',
      //     titulo:'ANTHELOS XL GEL CREMA TOQUE SECO',
      //     descripcion:'Muy alta protección. Acabado seco. Sin perfume'
      // },
      // {
      //     img:'assets/img/umbrella.png esto es una ruta de la img',
      //     titulo:'lle pones la info ',
      //     descripcion:'poner info'
      // }



    itemss = [
      {
          img:'assets/img/umbrella.png',
          titulo:'ADULTO'

      },
      {
          img:'assets/img/umbrella.png',
          titulo:'BEBES'

      },
      {
          img:'assets/img/umbrella.png esto es una ruta de la img',
          titulo:'NIÑOS'

      }
    ];
    itemsss = [
      {
          img:'assets/img/umbrella.png',
          titulo:'ANTHELOS XL GEL CREMA TOQUE SECO',
          descripcion:'Muy alta protección. Acabado seco. Sin perfume'
      },
      {
          img:'assets/img/umbrella.png',
          titulo:'ANTHELOS XL GEL CREMA TOQUE SECO',
          descripcion:'Muy alta protección. Acabado seco. Sin perfume'
      },
      {
          img:'assets/img/umbrella.png esto es una ruta de la img',
          titulo:'lle pones la info ',
          descripcion:'poner info'
      }
    ];


}
