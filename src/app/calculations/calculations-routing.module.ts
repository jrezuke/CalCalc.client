import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationsComponent } from "app/calculations/calculations.component";
import { CalculationsEntryComponent } from "app/calculations/calculations-entry/calculations-entry.component";
import { CalculationsNewComponent } from "app/calculations/calculations-entry/calculations-new/calculations-new.component";
import { CalculationsEditComponent } from "app/calculations/calculations-entry/calculations-edit/calculations-edit.component";
import { CalculationsGuard } from "app/calculations/calculations.guard";
import { FluidInfusionsComponent } from "app/calculations/calculations-entry/calculations-edit/fluid-infusions/fluid-infusions.component";
import { EnteralComponent } from "app/calculations/calculations-entry/calculations-edit/enteral/enteral.component";
import { ParenteralComponent } from "app/calculations/calculations-entry/calculations-edit/parenteral/parenteral.component";

const routes: Routes = [
  {path:'', component:CalculationsComponent},
  {path:'entry', component:CalculationsEntryComponent,
   children: [
     {path:'new', component:CalculationsNewComponent, canActivate:[CalculationsGuard]},
     {path:':id', component:CalculationsEditComponent,
      children:[
        {path:'fluid-infusions', component:FluidInfusionsComponent},
        {path:'enteral', component:EnteralComponent},
        {path:'parenteral', component:ParenteralComponent}
      ]
    }
   ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculationsRoutingModule { }
