
import { Component,OnInit } from '@angular/core';
import{ PreguntasService} from '../../shared/preguntas.service';

@Component({

  selector: 'page-registrarse',
   templateUrl: 'registrarse.html'

})
export class RegistrarsePage implements OnInit {

    preguntas: Array<any> = [];

   constructor(public preguntasService:PreguntasService) {

   }
   ngOnInit() {
      this.preguntasService.getPreguntas().subscribe(preguntas => {
      this.preguntas = preguntas;
       console.log(this.preguntas);
   })

   }
   test(preguntaKey:string, respuesta: string) {
       this.preguntasService.agregarRespuestaTest(preguntaKey, respuesta,'salome');
   }

}
