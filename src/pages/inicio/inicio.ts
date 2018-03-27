import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  constructor(public navCtrl: NavController){}

hom(){
    this.navCtrl.popToRoot();}
  slides = [
  {
    title: "Bienvenida(o) a <br/>SUNRISE!",
    description: "EN SUNRISE ALIMENTARAS <br/>TU CULTURA PREVENTIVA SOBRE<br/> EL CANCER DE PIEL Y <br/> APRENDERAS COMO CUIDAR TU PIEL.",
    image: "assets/img/ica-slidebox-img-1.png",
  },

  {
    title: "LOGIN",
    description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
    image: "assets/img/ica-slidebox-img-2.png",
  },

  {
    title: "Test Previo",
    description: "No te asustes, solo queremos conocerte más <br/> tu informacion esta protegida.",
    image: "assets/img/ica-slidebox-img-3.png",
  }
];
}
