import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
