import { Component, OnInit } from '@angular/core';
import { SidebarItem } from "app/shared/sidebar/sidebar-item/sidebar-item";
import { LayoutService } from "app/shared/layout.service";

@Component({
  selector: 'calculations-edit',
  templateUrl: './calculations-edit.component.html',
  styleUrls: ['./calculations-edit.component.css']
})
export class CalculationsEditComponent implements OnInit {
  calcbarItems: SidebarItem[];
  constructor(private _layoutService: LayoutService) { }

  ngOnInit() {
     this._layoutService.getSidebarItems('entry')
        .subscribe((res: SidebarItem[]) => {
          this.calcbarItems = res;
          console.log('calcbarItems', this.calcbarItems);
        },
        (e) => console.log('error:', e));  
        
  }

}
