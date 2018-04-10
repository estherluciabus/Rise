// import { NavController } from 'ionic-angular';
//  import { DataService } from '../../shared/data.service';
//
//  @Component({
//    selector: 'page-about',
//    templateUrl: 'about.html'
//  })
//  export class AboutPage implements OnInit {
//
//    mostrarFoto: boolean = true;
//    preguntas: Array<any> = [];
//
//    constructor(public navCtrl: NavController, public dataService: DataService) {
//
//    }
//
//    ngOnInit() {
//      this.dataService.getQuestions().subscribe(preguntas => {
//        this.preguntas = preguntas;
//     console.log(this.preguntas);
//      })
//    }
//
//    toggleFoto() {
//      this.mostrarFoto = !this.mostrarFoto;
//    }
//
//    addQuestion(texto: string) {
//      this.dataService.addQuestion(texto);
//    }
//
//    updateNivel(key: string) {
//      this.dataService.updateNivel(key, 'avanzado');
//    }
//
//    agregarRespuesta() {
//    this.dataService.addAnswer('alternativa1', 'pregunta2', 'salome');
//    }
//
//
//  }
