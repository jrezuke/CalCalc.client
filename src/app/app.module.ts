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
import { CalculationsService } from "app/calculations/calculations.service";
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
//import { ModalModule } from "ngx-bootstrap/modal";
//import { ConfirmModalComponent } from "./shared/modals/confirm-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    //ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    //ModalModule.forRoot(),
    SharedModule.forRoot() //the shared providers are available in lazy load mods
  ],
  exports:[],
  providers: [
    SitesService, SubjectsService, CalculationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
