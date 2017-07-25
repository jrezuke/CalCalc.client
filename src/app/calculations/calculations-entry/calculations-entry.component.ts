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
  
  constructor(private _router: Router, 
    private _route: ActivatedRoute,
    private _layoutService: LayoutService) { }

  ngOnInit() {
    // this._layoutService.getSidebarItems('entry')
    //     .subscribe((res: SidebarItem[]) => {
    //       this.calcbarItems = res;
    //       console.log('calcbarItems', this.calcbarItems);
    //     },
    //     (e) => console.log('error:', e));  
        
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("appComponent.ngInit.this._router.events.subscribe NavigationEnd-event:", event);
        this.onPathChange(event.url);
      }
    });
  }

  onSelect(urlSeg: string){
    this._layoutService.setUrl(urlSeg);
  }
  onPathChange(url: string) {
    console.log("onPathChange path:", url);
    //this._layoutService.setUrl(url);
  }

  
}
