import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { SaludPage } from '../salud/salud';

import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html',


})
export class TabsPage {

  HomeRoote = HomePage;
SaludRoote =  SaludPage;
  MenuRoote = MenuPage;




  constructor() {

  }

}
