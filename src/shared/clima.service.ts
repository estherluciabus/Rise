  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/observable/from';

  @Injectable()
  export class  ClimaService {
    constructor(private http: HttpClient) {

    }

    getData(latitude: number, longitude: number) {
      const url = 'http://www.senamhi.gob.pe/usr/dms/modelo/iuv/prono_ruv.json';
      let distancias = [];
      return this.http.get(url).map((zonas: Array<any>) => {
        let distanciaMin = Number.MAX_VALUE;
        let indexMin = 0;
        distancias = zonas.map((zona, index) => {
          let lat = zona.n_lat_sig - latitude;
          let lon = zona.n_lon_sig - longitude;
          lat *= lat;
          lon *= lon;
          const d = Math.sqrt(lat + lon);
          if (d <= distanciaMin) {
            distanciaMin = d;
            indexMin = index;
          }
          return d;
        });
        return zonas[indexMin];
      });
    }

  }
