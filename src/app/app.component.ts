import { Component, OnInit } from '@angular/core';
import { SecurityService } from "app/shared/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: string; 

  constructor(private _securityService: SecurityService) {

  }
  ngOnInit() {
    this._securityService.state$.subscribe((state) => {
      this.state = state;
      console.log('AppComponent state change:', this.state);
    });
    console.log('AppComponent.ngOnInit state', this.state);

    
  }
  
}
