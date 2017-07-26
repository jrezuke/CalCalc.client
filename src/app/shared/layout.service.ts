import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SidebarItem } from "./sidebar/sidebar-item/sidebar-item";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {
  private url = new BehaviorSubject<string>("");
  private id = new BehaviorSubject<number>(0);
  url$ = this.url.asObservable();
  id$ = this.id.asObservable();

  constructor(private _http: Http) { }

  setUrl(newUrl: string){
    this.url.next(newUrl);
  }

  setId(newId: number){
    this.id.next(newId);
  }

  getSidebarItems(type: string): Observable<SidebarItem[]> {
    console.log('items:', type);
    let url  = '';
    if (type === 'main') {
      url = 'assets/mainBarItems.json';
    }
    if (type === 'entry') {
      url = 'assets/entryBarItems.json';
    }
    console.log('url', url);
    return this._http.get(url)
      .map(res => res.json())
      .catch(this.handleError);

  }

  handleError(err: any) {
        console.log('sever error:', err);  // debug
        if (err instanceof Response) {
          // return Observable.throw(err.json().error || 'backend server error');
          // if you're using lite-server, use the following line
          // instead of the line above:
          return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
  }
}
