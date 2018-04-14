import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { PreguntasService} from '../shared/preguntas.service';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { App, ViewController } from 'ionic-angular';

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
export class  MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  user = null;
  preguntas: Array<any> = [];

  constructor(
    public preguntasService:PreguntasService,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private googlePlus: GooglePlus
    // public viewCtrl: ViewController,
    // public appCtrl: App
  )
    {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
     this.preguntasService.getPreguntas().subscribe(preguntas => {
     this.preguntas = preguntas;
      console.log(this.preguntas);
  })

  }
  test(preguntaKey:string, respuesta: string) {
      this.preguntasService.agregarRespuestaTest(preguntaKey, respuesta,'salome');
  }



  pushbloqueadores() {
    this.nav.push(BloqueadoresPage);
  }
  pushtestimonio() {
    this.nav.push(TestimonioPage);
  }
  openPage() {
    this.nav.push(ConfiguracionesPage);
  }
  pushsoporte() {
    this.nav.push(SoportedeproblemaPage);
  }

  pushayuda() {
    this.nav.push(AyudaPage);
  }

  inicio() {
    this.user = {};
  }
  pushhome(){
    this.nav.push(HomePage);

  }

  login() {
    this.googlePlus.login({
      'offline': true
    }).then(res => {
      this.user =res;
    }, err => alert('error'));

  }

  logout() {
    this.googlePlus.logout().then(() => this.user = null);
  }

}
