import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AlimentacionPage } from '../pages/alimentacion/alimentacion';
import { TabsPage } from '../pages/tabs/tabs';
import { PrevencionPage } from '../pages/prevencion/prevencion';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      this.home = HomePage;
      this.alimentacion = AlimentacionPage;
      this.tabs = TabsPage;
        this.prevencion = PrevencionPage;

      this.push= this.tabs;


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

openPage(alimentacion) {
this.push = alimentacion;
};

}
