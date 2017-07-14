import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
  { path: 'subjects', loadChildren: 'app/subjects/subjects.module#SubjectsModule' },
  { path: 'calculations', loadChildren: 'app/calculations/calculations.module#CalculationsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
