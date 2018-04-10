import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaludPage } from '../pages/salud/salud';
// import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
import { TestimonioPage } from '../pages/testimonio/testimonio';
import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
import { SoportedeproblemaPage } from '../pages/soportedeproblema/soportedeproblema';
import { AyudaPage } from '../pages/ayuda/ayuda';


import { TabsPage } from '../pages/tabs/tabs';

import { PreguntasService} from '../shared/preguntas.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ClimaService } from '../shared/clima.service';


import{ config} from '../firebaseConfig';
import{ AngularFireDatabaseModule } from 'angularfire2/database';
import{ AngularFireModule } from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    // RegistrarsePage,
    BloqueadoresPage,
    TestimonioPage,
    ConfiguracionesPage,
    SoportedeproblemaPage,
    AyudaPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpClientJsonpModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    // RegistrarsePage,
    BloqueadoresPage,
    TestimonioPage,
    ConfiguracionesPage,
    SoportedeproblemaPage,
    AyudaPage



  ],
  providers: [
    StatusBar,
    SplashScreen,
    PreguntasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GoogleMaps,
    GooglePlus,
    ClimaService

  ]



})
export class AppModule {}
