import { Component, OnInit } from '@angular/core';
import { SecurityService } from "app/shared/security.service";
import { SidebarItem } from "app/shared/sidebar/sidebar-item/sidebar-item";
import { LayoutService } from "app/shared/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: string;
  mainbarItems: SidebarItem[];

  constructor(private _securityService: SecurityService, private _layoutService: LayoutService) {

  }
  ngOnInit() {
    this._securityService.state$.subscribe((state) => {
      this.state = state;
      console.log('AppComponent state change:', this.state);
    });
    console.log('AppComponent.ngOnInit state', this.state);

    this._layoutService.getSidebarItems('main')
        .subscribe((res: SidebarItem[]) => {
          this.mainbarItems = res;
          console.log('mainBarItems', this.mainbarItems);
        },
        (e) => console.log('error:', e));  
        
  }
  
}
