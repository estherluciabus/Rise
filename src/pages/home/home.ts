import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public toastCtrl: ToastController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: ' Cada 2h aplicate el bloqueador para una completa proteccion ',
      duration: 3000,
      position: 'button'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }


}
