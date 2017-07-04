import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from "app/shared/security.service";
import { ConfirmModalComponent } from "./modals/confirm-modal.component";
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot()
  ],
  exports:[ModalModule, ConfirmModalComponent],
  declarations: [ConfirmModalComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,         
      providers: [SecurityService]
    };
  }
}
