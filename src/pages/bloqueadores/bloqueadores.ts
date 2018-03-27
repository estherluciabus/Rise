import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({

  selector: 'page-bloqueadores',
   templateUrl: 'bloqueadores.html'

})
export class BloqueadoresPage{
  constructor(public navCtrl: NavController) {
 }
  menu(){
      this.navCtrl.popToRoot();
  }

}
