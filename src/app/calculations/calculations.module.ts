import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from "app/shared/shared.module";
import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsComponent } from "app/calculations/calculations.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalculationsRoutingModule,
    SharedModule    
  ],
  declarations: [CalculationsComponent]
})
export class CalculationsModule { }
