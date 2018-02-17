import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import{ Observable } from 'rxjs/Observable';

@Injectable()
export class PreguntasService {
  preguntasReference:  AngularFireList<any>;
  preguntasObservable: Observable<any>;

  constructor(public db: AngularFireDatabase){
    this.preguntasReference =db.list('preguntas');
    this.preguntasObservable = this.preguntasReference.snapshotChanges()
    .map(cambios => {
      return cambios.map(cambio =>{
        return cambio.payload.val();
      })
    });

  }


}
