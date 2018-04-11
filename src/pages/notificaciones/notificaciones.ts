import { Component } from '@angular/core';
import { MitosPage } from '../../pages/mitos/mitos';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html'
})
export class NotificacionesPage {
  constructor(public navCtrl: NavController) {

  }
    mitos() {
      this.navCtrl.push(MitosPage);
    }
    items = [
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

    itemss = [
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
