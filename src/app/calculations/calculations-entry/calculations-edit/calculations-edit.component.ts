import { Component, OnInit } from '@angular/core';
import { LayoutService } from "app/shared/layout.service";
import { Router, ActivatedRoute } from "@angular/router";
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'calculations-edit',
  templateUrl: './calculations-edit.component.html',
  styleUrls: ['./calculations-edit.component.css']
})
export class CalculationsEditComponent implements OnInit {
  
  constructor(private _layoutService: LayoutService,
    private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._layoutService.url$.subscribe( (url) => {
      console.log("CalculationsEditComponent.ngOnInit - url:", url);
      //this.onSidebarSelect(url);
    })
  }

  alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  onSelect(route: string){
    //let urlSeg = route.substr(route.lastIndexOf('/')+1); 
    console.log("onSidebarSelect", route);

    // switch(urlSeg){
    //   case "fluid-infusions":
    //     console.log("route:", this._route);
        
    //   case "enteral":
    //     console.log("route:", this._route);
        
    // }
  }

}
