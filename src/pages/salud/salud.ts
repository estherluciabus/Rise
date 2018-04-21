public alertCtrl: AlertController){}
  cocinaAlert(){
    let alert = this.alertCtrl.create({
    title: 'ATENCION',
    title: 'TE RECOMENDAMOS',
     subTitle: 'una vez cocinadas, escurrirlas, meter a la nevera <b> y evita recalentarlas de forma repetida, si no se convertira en sustancias potencialmente cancerígenas</b>',
    buttons: ['Dismiss']
    buttons: ['OK']
  });
  alert.present();

 }
 CHATARRAAlert(){
   let alert = this.alertCtrl.create({
    title: 'TEN EN CEUNTA QUE:',
    subTitle: 'TE HACE MAS PROPENSO A TENER CANCER',
    buttons: ['LO LOGRARE']
   });
   alert.present();
