import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Formula } from "app/calculations/calculations-entry/calculations-edit/formula";
import { Enteral } from "app/calculations/calculations-entry/calculations-edit/enteral";

@Injectable()
export class EnteralService {
  constructor(private _http: Http) { }

  getFormulas():Observable<Formula[]>{
    let apiUrl = "http://localhost:5000/api/formulas";
    return this._http.get(apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  saveNewEnterals(enterals: Enteral[]){
    let aObs:any[] = new Array(); 
    let url = "http://localhost:5000/api/enterals"
    let headers = new Headers();        
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
        requestOpts.headers = headers;
    for (let i=0; i<enterals.length; i++){
      let body = new Enteral();
      body.calEntryId =  enterals[i].calEntryId;
      body.formulaListId = enterals[i].formulaListId;
      body.volume = enterals[i].volume;

      let obs =  this._http.post(url, JSON.stringify(body), requestOpts);
      aObs.push(obs);
    }
    return Observable.forkJoin(aObs);
  }

  addEnteral(enteral: Enteral) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    let apiUrl = "http://localhost:5000/api/enterals";
    return this._http.post(apiUrl, JSON.stringify(enteral), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateEnteral(enteral: Enteral) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    let apiUrl = "http://localhost:5000/api/enterals/" + enteral.id;
    return this._http.put(apiUrl, JSON.stringify(enteral), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addFormula(formula: Formula) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    let apiUrl = "http://localhost:5000/api/formulas";
    return this._http.post(apiUrl, JSON.stringify(formula), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateFormula(formula: Formula) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    let apiUrl = "http://localhost:5000/api/formulas/" + formula.id;
    return this._http.put(apiUrl, JSON.stringify(formula), requestOpts)
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