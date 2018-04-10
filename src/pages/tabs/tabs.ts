import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { SaludPage } from '../salud/salud';

// import { RegistrarsePage } from '../registrarse/registrarse';

import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html',

})
export class TabsPage {

  HomeRoote = HomePage;
  SaludRoote =  SaludPage;
// RegistrarseRoote = RegistrarsePage;

  constructor(public navCtrl: NavController) {

  }
  hom(){
      this.navCtrl.popToRoot();
  }

}
