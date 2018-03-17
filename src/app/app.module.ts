import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaludPage } from '../pages/salud/salud';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { AlimentacionPage } from '../pages/alimentacion/alimentacion';
import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
import { TestimonioPage } from '../pages/testimonio/testimonio';


import { TabsPage } from '../pages/tabs/tabs';

import { PreguntasService} from '../shared/preguntas.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


import{ config} from '../firebaseConfig';
import{ AngularFireDatabaseModule } from 'angularfire2/database';
import{ AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    RegistrarsePage,
    AlimentacionPage,
    BloqueadoresPage,
    TestimonioPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
   AngularFireDatabaseModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    RegistrarsePage,
    AlimentacionPage,
    BloqueadoresPage,
    TestimonioPage



  ],
  providers: [
    StatusBar,
    SplashScreen,
    PreguntasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GoogleMaps
  ]



})
export class AppModule {}
