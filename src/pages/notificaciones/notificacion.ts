templateUrl: 'notificaciones.html'
 })
 export class NotificacionesPage {
  item: boolean = null;
  publicidad: boolean = null;

   constructor(public navCtrl: NavController) {
   }

     mitos() {
       this.navCtrl.push(MitosPage);
     }
    items :[
      {
          img:'assets/img/La_Roche-Posay.png',
          titulo:'NIÑOS,BEBÉS,ADULTOS,..',

      }
   ];

       // {
       //     img:'assets/img/umbrella.png esto es una ruta de la img',
       //     titulo:'ADULTO',
