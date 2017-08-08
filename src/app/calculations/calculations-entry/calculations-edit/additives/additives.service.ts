import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Additive } from "app/calculations/calculations-entry/calculations-edit/additive";
import { Unit } from "app/calculations/calculations-entry/calculations-edit/unit";
import { AdditiveListItem } from "app/calculations/calculations-entry/calculations-edit/additiveListItem";

@Injectable()
export class AdditivesService {
  constructor(private _http: Http) { }

  getAdditives():Observable<Additive[]>{
    let apiUrl = "http://localhost:5000/api/additives";
    return this._http.get(apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAdditiveList():Observable<AdditiveListItem[]>{
    let apiUrl = "http://localhost:5000/api/additivelist";
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
 
  
  getSelectItems(){
    let obsUnits = this._http.get("http://localhost:5000/api/units")
      .map(res => res.json())
      .catch(this.handleError);

    let obsAdditiveList =  this._http.get("http://localhost:5000/api/additivelist")
      .map(res => res.json())
      .catch(this.handleError);   
  
    return Observable.forkJoin(obsUnits, obsAdditiveList);
  }
  saveNewAdditives(additives: Additive[]){
    let aObs:any[] = new Array(); 
    let url = "http://localhost:5000/api/additives"
    let headers = new Headers();        
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
        requestOpts.headers = headers;
    for (let i=0; i<additives.length; i++){
      let body = new Additive();
      body.calEntryId =  additives[i].calEntryId;
      body.additiveListId = additives[i].additiveListId;
      body.volume = additives[i].volume;

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