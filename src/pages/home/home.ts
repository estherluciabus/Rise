import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';
import{ PreguntasService} from '../../shared/preguntas.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage implements OnInit {

  constructor(public toastCtrl: ToastController,public preguntasService:PreguntasService) {
  }

  ngOnInit() {
    this.preguntasService.getPreguntas().subscribe(preguntas => {
      console.log(preguntas)
    })
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
