import { Component, OnInit } from '@angular/core';
import { LayoutService } from "app/shared/layout.service";
import { Router, ActivatedRoute } from "@angular/router";

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
      this.onSidebarSelect(url);
    })
  }

  onSidebarSelect(route: string){
    let urlSeg = route.substr(route.lastIndexOf('/')+1); 
    console.log("onSidebarSelect", urlSeg);

    switch(urlSeg){
      case "fluid-infusions":
        console.log("route:", this._route);
        this._router.navigate(["/fluid-infusions", {relativeTo: this._route}]);
      case "enteral":
        console.log("route:", this._route);
        this._router.navigate(["/enteral", {relativeTo: this._route}]);  
    }
  }

}
