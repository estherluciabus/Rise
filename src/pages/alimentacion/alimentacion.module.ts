import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlimentacionPage } from './alimentacion';

@NgModule({
  declarations: [
    AlimentacionPage,
  ],
  imports: [
    IonicPageModule.forChild(AlimentacionPage),
  ],
})
export class AlimentacionPageModule {}
