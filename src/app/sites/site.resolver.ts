import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SitesService } from './sites.service';
import { Site } from './site';

@Injectable()

export class SiteResolver implements Resolve<any> {
  constructor(private _sitesService: SitesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Site> {
    console.log("SiteResolver.resolve");
    let id = route.params["id"];
    return this._sitesService.getSite(id);
  }
}
