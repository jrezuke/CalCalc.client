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
  id: number;
  mode: string;

  constructor(private _layoutService: LayoutService,
    private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.url.subscribe(url => console.log("url: ", url));
    this._route.queryParams.subscribe(qp => {
      this.onQueryParamsChange(qp)
    })
    console.log("snapshot url:", this._route.snapshot.url[0].path);
    this.id = parseInt(this._route.snapshot.url[0].path);
    console.log("queryParams", this._route.queryParams);
  }

  onQueryParamsChange(qp){
    console.log("qp", qp);

    
      console.log("qp mode", qp.mode);
      if (qp.mode) {
        console.log("if qp.mode", qp.mode);
        this.mode = qp.mode;
      }
      else{
        console.log("no qp.mode", qp.mode);
        this.mode = "";
      }

    
  
  }

  alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  onSelect(route: string) {
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
