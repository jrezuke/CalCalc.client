import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CalculationsService } from "app/calculations/calculations.service";

@Injectable()
export class CalculationsGuard implements CanActivate {
  
  constructor(private _calculationsService: CalculationsService,
    private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this._calculationsService.subject){
      return true; 
     }
    //without this the router navigates to /
     this._router.navigate(['/calculations']);
    return false;  
  }
}
