import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';

import { Parenteral } from "app/calculations/calculations-entry/calculations-edit/parenteral";


@Injectable()
export class ParenteralsService {

  constructor(private _http: Http) { }

  saveNewParenterals(par:Parenteral[]){
    let aObs:any[] = new Array(); 
    let url = "http://localhost:5000/api/Parenterals"
    let headers = new Headers();        
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
        requestOpts.headers = headers;
    for (let i=0; i<par.length; i++){
      let body = new Parenteral();
      body.calEntryId =  par[i].calEntryId;
      body.amino = par[i].amino;
      body.dextrose = par[i].dextrose;
      body.volume = par[i].volume;

      let obs =  this._http.post(url, JSON.stringify(body), requestOpts);
      aObs.push(obs);
    }
    return Observable.forkJoin(aObs);    
  }

  updateParenterals(par:Parenteral[]){
    let aObs:any[] = new Array(); 
    let url = "http://localhost:5000/api/Parenterals"
    let headers = new Headers();        
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
        requestOpts.headers = headers;
    for (let i=0; i<par.length; i++){
      let id = par[i].id;
      let urlf = url + "/" + id;
      let body = new Parenteral();
      body.id = id;
      body.calEntryId =  par[i].calEntryId;
      body.amino = par[i].amino;
      body.dextrose = par[i].dextrose;
      body.volume = par[i].volume;

      let obs =  this._http.post(urlf, JSON.stringify(body), requestOpts);
      aObs.push(obs);
    }
    return Observable.forkJoin(aObs);    
  }


  getParenterals(id: string): Observable<Parenteral[]>{
    let url = "http://localhost:5000/api/Parenterals/entries" + "/" + id;
    let headers = new Headers();        
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
        requestOpts.headers = headers;
    return this._http.get(url, requestOpts)
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
