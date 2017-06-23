import { Component, OnInit } from '@angular/core';
import { SecurityService } from "app/shared/security.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _securityService: SecurityService) { }

  ngOnInit() {
    this._securityService.state$.subscribe(v => {
      console.log("HomeComponent.ngOnItit _securityService.state", v);
    })
  }

}
