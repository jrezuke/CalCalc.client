import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SubjectsService } from './subjects.service';
import { Subject } from './subject';

@Injectable()

export class SubjectResolver implements Resolve<any> {
  constructor(private _subjectsService: SubjectsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Subject> {
    console.log("SiteResolver.resolve");
    let id = route.params["id"];
    return this._subjectsService.getSubject(id);
  }
}
