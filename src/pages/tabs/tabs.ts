import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { SaludPage } from '../salud/salud';

// import { RegistrarsePage } from '../registrarse/registrarse';

import { NavController } from 'ionic-angular';

import { NotificacionesPage } from '../notificaciones/notificaciones';



@Component({
  templateUrl: 'tabs.html',

})
export class TabsPage {

  HomeRoote = HomePage;
<<<<<<< HEAD
  SaludRoote =  SaludPage;
// RegistrarseRoote = RegistrarsePage;

=======
SaludRoote =  SaludPage;
RegistrarseRoote = RegistrarsePage;
NotificacionesRoote = NotificacionesPage;
>>>>>>> c81df2fc94de0dc03e8ee242dd14634187ebc75c
  constructor(public navCtrl: NavController) {

  }
  hom(){
      this.navCtrl.popToRoot();
  }

}
