import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({

  selector: 'page-soportedeproblema',
   templateUrl: 'soportedeproblema.html'

})
export class SoportedeproblemaPage{

  constructor(public alertCtrl: AlertController) {

  }
  abriralerta() {
let prompt = this.alertCtrl.create({
title: 'Login',
message: "Enter a name for this new album you're so keen on adding",
inputs: [
{
 name: 'title',
 placeholder: 'Title'
},
],
buttons: [
{
 text: 'Cancel',
 handler: data => {
   console.log('Cancel clicked');
 }
},
{
 text: 'Save',
 handler: data => {
   console.log('Saved clicked');
 }
}
]
});
prompt.present();
}

}
