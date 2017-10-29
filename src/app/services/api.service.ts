import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { TypeTraining } from '../models/type-training';

@Injectable()
export class ApiService {
  api_url = "http://localhost:3000/types_training";
  constructor(private http: Http) { }

  getTypesTraining(): Observable<TypeTraining[]> {
    return this.http.get(this.api_url).map((response: Response) => response.json());
  }
  addTypeTraining(type_training: Object): Observable<TypeTraining[]>  {
    return this.http.post(this.api_url, type_training)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || { message: 'Error del servidor' }));
  }

  getTypeTraining(id: String): Observable<TypeTraining[]> {
  return this.http.get(this.api_url+'/'+id)
    .map((response: Response) => response.json())
  }

  updateTypeTraining(training: Object): Observable<TypeTraining[]> {
    return this.http.put(this.api_url+'/'+training["_id"], training)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Error del Servidor"}));
  }

}
