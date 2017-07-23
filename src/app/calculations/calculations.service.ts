import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CalculationEntry } from "app/calculations/calculation-entry";
import { Subject } from "app/subjects/subject";

@Injectable()
export class CalculationsService {
  apiUrl: string;
  calcEntries: Observable<CalculationEntry>[];
  subject: Subject;

  constructor(private _http: Http) { }

  getEntries() {
    this.apiUrl = "http://localhost:5000/api/CalEntries";
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addEntry(entry:CalculationEntry){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    this.apiUrl = "http://localhost:5000/api/CalEntries";
    return this._http.post(this.apiUrl, JSON.stringify(entry), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  } 

  getEntriesForSubject(subjectId: number) {
    this.apiUrl = "http://localhost:5000/api/CalEntries/GetBySubject/" + subjectId;
    return this._http.get(this.apiUrl)
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
