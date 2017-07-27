import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DextroseConcentration } from "../dextrose-concentration";
import { FluidInfusion } from "../fluid-infusion";


@Injectable()
export class FluidInfusionsService {  

  constructor(private _http: Http) { }

  getDextroseConcentrations():Observable<DextroseConcentration[]>{
    let apiUrl = "http://localhost:5000/api/dextroseconcentrations";
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
