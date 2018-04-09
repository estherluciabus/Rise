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

}
