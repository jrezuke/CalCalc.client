import { Component, OnInit, ViewChild } from '@angular/core';
import { SecurityService } from "app/shared/security.service";
import { ConfirmModalComponent } from "app/shared/modals/confirm-modal.component";
import { SidebarItem } from "app/shared/sidebar/sidebar-item/sidebar-item";
import { LayoutService } from "app/shared/layout.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(ConfirmModalComponent) confirmModal: ConfirmModalComponent;
  mainbarItems: SidebarItem[];

  constructor(private _securityService: SecurityService, private _layoutService: LayoutService) { }

  ngOnInit() {
    this._securityService.state$.subscribe(v => {
      console.log("HomeComponent.ngOnItit _securityService.state", v);
    });

    this._layoutService.getSidebarItems('main')
        .subscribe((res: SidebarItem[]) => {
          this.mainbarItems = res;
          console.log('mainBarItems', this.mainbarItems);
        },
        (e) => console.log('error:', e));  
        
  }

  onShowModalClick(modalType: string){
    this.confirmModal.Show();    
  }
  onModalClicked(m: string){
    console.log("onModalClicked, m", m)
    if(m === "ok"){
      this.confirmModal.Hide();
      //this.informModal.Hide();
    }
  }

}
