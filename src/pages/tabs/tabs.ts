import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { SaludPage } from '../salud/salud';

import { NavController } from 'ionic-angular';

import { NotificacionesPage } from '../notificaciones/notificaciones';



@Component({
  templateUrl: 'tabs.html',

})
export class TabsPage {

  HomeRoote = HomePage;

  SaludRoote =  SaludPage;

  NotificacionesRoote = NotificacionesPage;

  constructor(public navCtrl: NavController) {

  }
  hom(){
      this.navCtrl.popToRoot();
  }

}
