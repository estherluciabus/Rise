import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({

  selector: 'page-salud',
   templateUrl: 'salud.html'

})
export class SaludPage {
 constructor(public navCtrl: NavController,
 public alertCtrl: AlertController){}
 cocinaAlert(){
   let alert = this.alertCtrl.create({
    title: 'TE RECOMENDAMOS',
    subTitle: 'una vez cocinadas, escurrirlas, meter a la nevera <b> y evita recalentarlas de forma repetida, si no se convertira en sustancias potencialmente cancerígenas</b>',
    buttons: ['OK']
  });
  alert.present();

 }
 CHATARRAAlert(){
   let alert = this.alertCtrl.create({
    title: 'TEN EN CEUNTA QUE:',
    subTitle: 'TE HACE MAS PROPENSO A TENER CANCER',
    buttons: ['LO LOGRARE']
  });
  alert.present();

 }
 notificacion(){
     this.navCtrl.push(HomePage)
 }

}
