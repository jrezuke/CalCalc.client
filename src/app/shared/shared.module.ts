import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityService } from "app/shared/security.service";
import { ConfirmModalComponent } from "./modals/confirm-modal.component";
import { ModalModule } from 'ngx-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalculationsGuard } from "app/calculations/calculations.guard";
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { RouterModule } from "@angular/router";
import { LayoutService } from "app/shared/layout.service";


@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot(), RouterModule
  ],
  exports:[ModalModule, ConfirmModalComponent,SidebarComponent],
  declarations: [ConfirmModalComponent, SidebarComponent, SidebarItemComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,         
      providers: [SecurityService,CalculationsGuard,LayoutService]
    };
  }
}
