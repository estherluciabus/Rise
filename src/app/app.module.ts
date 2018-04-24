import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaludPage } from '../pages/salud/salud';
import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
import { TestimonioPage } from '../pages/testimonio/testimonio';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { TabsPage } from '../pages/tabs/tabs';

import { PreguntasService} from '../shared/preguntas.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ClimaService } from '../shared/clima.service';
import { LoginService } from '../shared/login.service';

import { config} from '../firebaseConfig';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import { Geolocation } from '@ionic-native/geolocation';
// import { LocalNotifications } from '@ionic-native/local-notifications';
// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
// const cloudSettings: CloudSettings = {
// //   'core': {
// //     'app_id': 'xxxxxxxxx',
// //   },
// //   'push': {
// //     'sender_id': 'xxxxxxxxxx',
// //     'pluginConfig': {
// //       'ios': {
// //         'badge': true,
// //         'sound': true
// //       },
// //       'android': {
// //         'iconColor': '#343434'
// //       }
// //     }
// //   }
// // };

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    BloqueadoresPage,
    TestimonioPage,
    NotificacionesPage


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
    BloqueadoresPage,
    TestimonioPage,
    NotificacionesPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    PreguntasService,
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GoogleMaps,
    GooglePlus,
    ClimaService
    // LocalNotifications

  ]

})
export class AppModule {}
