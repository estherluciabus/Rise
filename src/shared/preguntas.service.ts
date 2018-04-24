import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import{ Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class PreguntasService {
  preguntasReference:   AngularFireList<any>;
  respuestasReference:  AngularFireList<any>;
  preguntasObservable:  Observable<any>;

  constructor(public db: AngularFireDatabase){
     this.preguntasReference = db.list('preguntas');
     this.respuestasReference = db.list('users');
     this.preguntasObservable = this.preguntasReference.snapshotChanges().map(cambios => {
      return cambios.map(change => {
        return {
          key: change.key,
          ...change.payload.val()
        };
      });
    });
  }

  getPreguntas():Observable<any>{
    return this.preguntasObservable;
  }

    agregarRespuestaTest( pregunta: string, alternative: string, tempUser: string) {
      this.db.list('users/' + tempUser + '/test').push({
      pregunta: pregunta,
      respuesta: alternative

    });
  }

}
