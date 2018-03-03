import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlimentacionPage } from '../alimentacion/alimentacion';

class SaludComponent {
  constructor(public navCtrl: NavController) {

  }
otraPagina(){
  this.navCtrl.push(AlimentacionPage);
}

}

@Component({

  selector: 'page-salud',
   templateUrl: 'salud.html'

})
export class SaludPage {
  salud: string = "puppies";
  isAndroid: boolean = false;

  }
