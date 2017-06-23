import { Component, OnInit } from '@angular/core';
import { SecurityService } from "app/shared/security.service";

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor(private _securityService: SecurityService) { }

  ngOnInit() {
    this._securityService.state$.subscribe(v => {
      console.log("SitesComponent.ngOnItit _securityService.state", v);
    })
  }

}
