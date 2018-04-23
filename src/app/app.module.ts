import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
 import { ErrorHandler, NgModule } from '@angular/core';
 import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 import { SplashScreen } from '@ionic-native/splash-screen';
 import { StatusBar } from '@ionic-native/status-bar';

 import { MyApp } from './app.component';
 import { HomePage } from '../pages/home/home';
 import { SaludPage } from '../pages/salud/salud';
 import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
 import { TestimonioPage } from '../pages/testimonio/testimonio';
 import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
 import { SoportedeproblemaPage } from '../pages/soportedeproblema/soportedeproblema';
 import { AyudaPage } from '../pages/ayuda/ayuda';
 import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
 import { MitosPage } from '../pages/mitos/mitos';
+// import { BuscadorPage } from '../pages/buscador/buscador';

 import { TabsPage } from '../pages/tabs/tabs';

 import { PreguntasService} from '../shared/preguntas.service';
 import { GoogleMaps } from '@ionic-native/google-maps';
 import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
 import { ClimaService } from '../shared/clima.service';
+import { AgmCoreModule } from '@agm/core';


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
     BloqueadoresPage,
     TestimonioPage,
     ConfiguracionesPage,
     SoportedeproblemaPage,
     AyudaPage,
     NotificacionesPage,
     MitosPage

   ],
   imports: [
     BrowserModule,
     IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(config),
     AngularFireDatabaseModule,
     HttpClientModule,
     HttpClientJsonpModule

     HttpClientJsonpModule,
     AgmCoreModule.forRoot({
        apiKey: "AIzaSyDFbv6UQi4rZ3dD0evELJOfb-tfTonWpWU",
        libraries: ["places"]
    })


   ],
   bootstrap: [IonicApp],
   entryComponents: [
     MyApp,
     TabsPage,
     HomePage,
     SaludPage,
     BloqueadoresPage,
     TestimonioPage,
     ConfiguracionesPage,
     SoportedeproblemaPage,
     AyudaPage,
     NotificacionesPage,
     MitosPage


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
=======
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaludPage } from '../pages/salud/salud';
import { BloqueadoresPage } from '../pages/bloqueadores/bloqueadores';
import { TestimonioPage } from '../pages/testimonio/testimonio';
import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
import { SoportedeproblemaPage } from '../pages/soportedeproblema/soportedeproblema';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { MitosPage } from '../pages/mitos/mitos';
// import { BuscadorPage } from '../pages/buscador/buscador';

import { TabsPage } from '../pages/tabs/tabs';

import { PreguntasService} from '../shared/preguntas.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ClimaService } from '../shared/clima.service';
import { AgmCoreModule } from '@agm/core';

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
    BloqueadoresPage,
    TestimonioPage,
    ConfiguracionesPage,
    SoportedeproblemaPage,
    AyudaPage,
    NotificacionesPage,
    MitosPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({
       apiKey: "AIzaSyDFbv6UQi4rZ3dD0evELJOfb-tfTonWpWU",
       libraries: ["places"]
     })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    SaludPage,
    BloqueadoresPage,
    TestimonioPage,
    ConfiguracionesPage,
    SoportedeproblemaPage,
    AyudaPage,
    NotificacionesPage,
    MitosPage


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
>>>>>>> e48c753071cd6573d82d989912bb10c2128cfbb0
