import { Component } from '@angular/core';
import { MitosPage } from '../../pages/mitos/mitos';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html'
})
export class NotificacionesPage {
  publicidad: boolean = null;

  constructor(public navCtrl: NavController) {
  }

    mitos() {
      this.navCtrl.push(MitosPage);
    }
  //   items :[
  //     {
  //         img:'assets/img/La_Roche-Posay.png',
  //         titulo:'NIÑOS,BEBÉS,ADULTOS,..',
  //
  //     }
  // ];

}
