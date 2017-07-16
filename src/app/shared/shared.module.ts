import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from "app/shared/security.service";
import { ConfirmModalComponent } from "./modals/confirm-modal.component";
import { ModalModule } from 'ngx-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalculationsGuard } from "app/calculations/calculations.guard";

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot()
  ],
  exports:[ModalModule, ConfirmModalComponent,SidebarComponent],
  declarations: [ConfirmModalComponent, SidebarComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,         
      providers: [SecurityService,CalculationsGuard]
    };
  }
}
