import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecurityService } from "app/shared/security.service";
import { ConfirmModalComponent } from "./modals/confirm-modal.component";
import { ModalModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';


import { SidebarComponent } from './sidebar/sidebar.component';
import { CalculationsGuard } from "app/calculations/calculations.guard";
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { RouterModule } from "@angular/router";
import { LayoutService } from "app/shared/layout.service";
import { FluidInfusionsService } from "app/calculations/calculations-entry/calculations-edit/fluid-infusions/fluid-infusions.service";
import { EnteralService } from "app/calculations/calculations-entry/calculations-edit/enteral/enteral.service";
import { ParenteralsService } from "app/calculations/calculations-entry/calculations-edit/parenteral/parenterals.service";
import { AdditivesService } from "app/calculations/calculations-entry/calculations-edit/additives/additives.service";


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(), 
    TabsModule.forRoot(), 
    TooltipModule.forRoot(),
    RouterModule
  ],
  exports:[ModalModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    TabsModule,
    ModalModule,
    TooltipModule, 
    ConfirmModalComponent,
    SidebarComponent],
  declarations: [ConfirmModalComponent, SidebarComponent, SidebarItemComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,         
      providers: [SecurityService,
        CalculationsGuard,
        LayoutService, 
        AdditivesService,
        FluidInfusionsService, 
        ParenteralsService,
        EnteralService]
    };
  }
}
