import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites.component';
import { SitesListComponent } from './sites-list.component';
import { SitesNewComponent } from './sites-new.component';
import { SitesEditComponent } from './sites-edit.component';
import { SiteResolver } from './site.resolver';

@NgModule({
  imports: [SitesRoutingModule,
    CommonModule, FormsModule
  ],
  providers: [SiteResolver],
  declarations: [SitesComponent,
    SitesNewComponent,
    SitesListComponent,
    SitesEditComponent]
})
export class SitesModule { }
