import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationsComponent } from "app/calculations/calculations.component";
import { CalculationsEntryComponent } from "app/calculations/calculations-entry/calculations-entry.component";
import { CalculationsNewComponent } from "app/calculations/calculations-entry/calculations-new/calculations-new.component";
import { CalculationsEditComponent } from "app/calculations/calculations-entry/calculations-edit/calculations-edit.component";

const routes: Routes = [
  {path:'', component:CalculationsComponent},
  {path:'entry', component:CalculationsEntryComponent,
   children: [
     {path:'new', component:CalculationsNewComponent},
     {path:':id', component:CalculationsEditComponent}
   ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculationsRoutingModule { }
