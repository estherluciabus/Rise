import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaludPage } from '../pages/salud/salud';
import { MenuPage } from '../pages/menu/menu';
import { AlimentacionPage } from '../pages/alimentacion/alimentacion';

import { TabsPage } from '../pages/tabs/tabs';

import { PreguntasService} from '../shared/preguntas.service';


import{ config} from '../firebaseConfig';
import{ AngularFireDatabaseModule } from 'angularfire2/database';
import{ AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    MenuPage,
    AlimentacionPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    MenuPage,
    AlimentacionPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    PreguntasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]



})
export class AppModule {}
