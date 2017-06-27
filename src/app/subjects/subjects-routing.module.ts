import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsComponent } from './subjects.component';
import { SubjectEditComponent } from './subject-edit.component';
import { SubjectsNewComponent } from './subjects-new.component';

const subjectsRoutes: Routes = [
  {
    path: '', component: SubjectsComponent,
    children: [
      { path: '', component: SubjectsListComponent },
      { path: 'new', component: SubjectsNewComponent }
    ]
  },
  { path: ':id', component: SubjectEditComponent },


];

@NgModule({
  imports: [RouterModule.forChild(subjectsRoutes)],
  exports: [RouterModule]

})
export class SubjectsRoutingModule { }
