import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { HomeComponent } from './home/home.component';
import { SitesService } from "app/sites/sites.service";
import { SubjectsService } from "app/subjects/subjects.service";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    SharedModule.forRoot() //this is available in lazy load mods
  ],
  providers: [
    SitesService, SubjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
