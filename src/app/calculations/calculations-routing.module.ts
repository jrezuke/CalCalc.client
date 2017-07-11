import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationsComponent } from "app/calculations/calculations.component";

const routes: Routes = [
  {path:'', component:CalculationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculationsRoutingModule { }
