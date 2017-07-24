import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from "app/shared/sidebar/sidebar-item/sidebar-item";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {
@Input() sidebarItems: SidebarItem[];
@Input() expanded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
