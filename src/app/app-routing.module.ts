import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { ContactsComponent } from "app/contacts/contacts.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
  { path: 'subjects', loadChildren: 'app/subjects/subjects.module#SubjectsModule' },
  { path: 'calculations', loadChildren: 'app/calculations/calculations.module#CalculationsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
