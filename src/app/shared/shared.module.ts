import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from "app/shared/security.service";
//import { InformModalComponent } from "./modals/inform-modal.component";
//import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[],
  declarations: [ ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,         
      providers: [SecurityService]
    };
  }
}
