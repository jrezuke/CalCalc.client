import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Additive } from "app/calculations/calculations-entry/calculations-edit/additive";
import { Unit } from "app/calculations/calculations-entry/calculations-edit/unit";

@Injectable()
export class AdditivesService {
  constructor(private _http: Http) { }

  getAdditives():Observable<Additive[]>{
    let apiUrl = "http://localhost:5000/api/additives";
    return this._http.get(apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getUnits():Observable<Unit[]>{
    let apiUrl = "http://localhost:5000/api/units";
    return this._http.get(apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  
  handleError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
  
}