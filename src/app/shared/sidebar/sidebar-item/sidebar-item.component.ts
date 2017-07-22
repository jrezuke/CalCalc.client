import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from "app/shared/sidebar/sidebar-item/sidebar-item";

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {
  @Input() sidebarItem: SidebarItem;
  @Input() expanded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
