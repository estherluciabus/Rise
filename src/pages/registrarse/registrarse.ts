
import { Component,OnInit } from '@angular/core';
import{ PreguntasService} from '../../shared/preguntas.service';

@Component({

  selector: 'page-registrarse',
   templateUrl: 'registrarse.html'

})
export class RegistrarsePage implements OnInit {

   respuestas: Array<any> = [];
   constructor(public preguntasService:PreguntasService) {

   }
   ngOnInit() {
     this.preguntasService.getPreguntas().subscribe(preguntas => {
       console.log(preguntas)
   })

 }
 updateRespuesta(key: string, password: string) {
   this.preguntasService.updateRespuesta(key,'password');
 }


}
