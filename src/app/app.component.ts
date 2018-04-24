import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { PreguntasService} from '../shared/preguntas.service';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
import { TestimonioPage } from '../pages/testimonio/testimonio';
import { LoginService } from '../shared/login.service';
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
    public loginService:LoginService,
    private googlePlus: GooglePlus

  )
    {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    }

  login() {
      this.loginService.login().then(user => {
        this.user = user;
      });
    }

    logout() {
      this.loginService.logout()
        .then(() => this.user = null);
    }

  ngOnInit() {
     this.preguntasService.getPreguntas().subscribe(preguntas => {
     this.preguntas = preguntas;
      console.log(this.preguntas);
  })
    this.user=this.loginService.getUser();
  }

  test(preguntaKey:string, respuesta: string) {
      this.preguntasService.agregarRespuestaTest(preguntaKey, respuesta,'resultados');
  }

  inicio() {
    this.user = {};
  }
  pushbloqueadores() {
    this.nav.push(BloqueadoresPage);
  }
  pushtestimonio() {
    this.nav.push(TestimonioPage);
  }

}
