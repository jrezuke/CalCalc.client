import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from "app/shared/shared.module";
import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsComponent } from "app/calculations/calculations.component";
import { CalculationsEntryComponent } from './calculations-entry/calculations-entry.component';
import { CalculationsNewComponent } from "app/calculations/calculations-entry/calculations-new/calculations-new.component";
import { CalculationsEditComponent } from "app/calculations/calculations-entry/calculations-edit/calculations-edit.component";
import { FluidInfusionsComponent } from "app/calculations/calculations-entry/calculations-edit/fluid-infusions/fluid-infusions.component";
import { EnteralComponent } from './calculations-entry/calculations-edit/enteral/enteral.component';
import { ParenteralComponent } from './calculations-entry/calculations-edit/parenteral/parenteral.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalculationsRoutingModule,
    SharedModule    
  ],
  declarations: [CalculationsComponent, 
    CalculationsEntryComponent, 
    CalculationsNewComponent, 
    CalculationsEditComponent, FluidInfusionsComponent, EnteralComponent, ParenteralComponent]
})
export class CalculationsModule { }
