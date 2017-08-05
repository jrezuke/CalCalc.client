import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';

import { DextroseConcentration } from "../dextrose-concentration";
import { FluidInfusion, FluidInfusionDisplay } from "../fluid-infusion";


@Injectable()
export class FluidInfusionsService {

  constructor(private _http: Http) { }

  getDextroseConcentrations(): Observable<DextroseConcentration[]> {
    let apiUrl = "http://localhost:5000/api/dextroseconcentrations";
    return this._http.get(apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveNewFluidInfusions(fis:FluidInfusion[]){
    let aObs:any[] = new Array(); 
    let url = "http://localhost:5000/api/fluidinfusions"
    let headers = new Headers();        
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
        requestOpts.headers = headers;
    for (let i=0; i<fis.length; i++){
      let body = new FluidInfusion();
      body.calEntryId =  fis[i].calEntryId;
      body.dextroseConcentrationId = fis[i].dextroseConcentrationId;
      body.volume = fis[i].volume;

      let obs =  this._http.post(url, JSON.stringify(body), requestOpts);
      aObs.push(obs);
    }
    return Observable.forkJoin(aObs);
    
  }

  handleError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
