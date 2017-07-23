import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Site } from './site';

@Injectable()
export class SitesService {
  apiUrl: string;
  subjects: Observable<Site>[];

  constructor(private _http: Http) { }

  getSites() {
    this.apiUrl = "http://localhost:5000/api/sites";
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSite(id: string) {
    this.apiUrl = "http://localhost:5000/api/sites/" + id;
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addSite(site: Site) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    this.apiUrl = "http://localhost:5000/api/sites";
    return this._http.post(this.apiUrl, JSON.stringify(site), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateSite(site: Site) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    this.apiUrl = "http://localhost:5000/api/sites/" + site.id;
    return this._http.put(this.apiUrl, JSON.stringify(site), requestOpts)
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
