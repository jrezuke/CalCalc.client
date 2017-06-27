import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Subject } from './subject';

@Injectable()
export class SubjectsService {
  apiUrl: string;
  subjects: Observable<Subject>[];

  constructor(private _http: Http) { }

  getSubjects() {
    this.apiUrl = "http://localhost:6702/api/subjects";
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSubject(id: string) {
    this.apiUrl = "http://localhost:6702/api/subjects/" + id;
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addSite(subject: Subject) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    this.apiUrl = "http://localhost:6702/api/subjects";
    return this._http.post(this.apiUrl, JSON.stringify(subject), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateSite(subject: Subject) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    this.apiUrl = "http://localhost:6702/api/subjects/" + subject.id;
    return this._http.put(this.apiUrl, JSON.stringify(subject), requestOpts)
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
