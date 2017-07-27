import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationExtras, ActivatedRoute, UrlSegment } from '@angular/router';
import { SidebarItem } from "app/shared/sidebar/sidebar-item/sidebar-item";
import { LayoutService } from "app/shared/layout.service";

@Component({
  selector: 'calculations-entry',
  templateUrl: './calculations-entry.component.html',
  styleUrls: ['./calculations-entry.component.css']
})
export class CalculationsEntryComponent implements OnInit {
  calcbarItems: SidebarItem[];
  id: number;

  constructor(private _router: Router, 
    private _route: ActivatedRoute,
    private _layoutService: LayoutService) { }

  ngOnInit() {
    this._layoutService.id$.subscribe( id => {
      this.id = id 
      console.log("CalculationsEntryComponent.ngOnInit: id", this.id);
    });  
        
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("CalculationsEntryComponent.ngInit.this._router.events.subscribe NavigationEnd-event:", event);
        this.onPathChange(event.url);
      }
    });
  }

  onSelect(urlSeg: string){
    //this._layoutService.setUrl(urlSeg);
    this._router.navigate(["/calculations/entry/" + this.id.toString() + "/" + urlSeg]);
  }
  onPathChange(url: string) {
    let id = this.extractId(url);
    console.log("CalculationsEntryComponent.onPathChange path:", url);
    
  }

  extractId(url: string){
    let segs = url.split("/");
    return segs[3];
  }
  
}
