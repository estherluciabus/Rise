import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
   templateUrl: 'menu.html'
})
export class MenuPage {
 constructor(public menuCtrl: MenuController) {}

 openMenu() {
   this.menuCtrl.open();
 }
}
