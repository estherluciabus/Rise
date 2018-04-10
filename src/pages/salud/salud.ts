import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({

  selector: 'page-salud',
   templateUrl: 'salud.html'

})
export class SaludPage {
 constructor(public navCtrl: NavController){}
 notificacion(){
     this.navCtrl.push(HomePage)
 }



 }
