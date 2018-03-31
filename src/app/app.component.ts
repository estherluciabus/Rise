import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
import { TestimonioPage } from '../pages/testimonio/testimonio';
import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
import { SoportedeproblemaPage } from '../pages/soportedeproblema/soportedeproblema';

import { AyudaPage } from '../pages/ayuda/ayuda';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage :any = TabsPage;
  inicioslide = true;


  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  pushhome(){
    this.nav.push(HomePage);
  }

  pushbloqueadores(){
    this.nav.push(BloqueadoresPage);
  }
  pushtestimonio(){
    this.nav.push(TestimonioPage);
  }
  pushconfirguracion(){
    this.nav.push(ConfiguracionesPage);
  }
  pushsoporte(){
    this.nav.push(SoportedeproblemaPage);
  }

  pushayuda(){
    this.nav.push(AyudaPage);
  }

inicio(){
    this.inicioslide = false;
}

  slides = [

  {
    title: "Bienvenida(o) a <br/>SUNRISE!",
    description: "EN SUNRISE ALIMENTARAS <br/>TU CULTURA PREVENTIVA SOBRE<br/> EL CANCER DE PIEL Y <br/> APRENDERAS COMO CUIDAR TU PIEL.",
    image: "assets/img/uno.png",
  },

  {
    title: "LOGIN",
    description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",

  },

  {
    title: "Test Previo",
    description: "No te asustes, solo queremos conocerte más <br/> tu informacion esta protegida.",

  }
  ];
  }
