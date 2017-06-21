import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from './site';
import { SitesService } from './sites.service';

@Component({
  selector: 'app-sites-new',
  templateUrl: './sites-new.component.html',
  styleUrls: ['./sites-new.component.css']
})
export class SitesNewComponent implements OnInit {
  site: Site = new Site();

  constructor(private _router: Router,
    private _sitesService: SitesService) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log("onSubmit form:", form);
    this._sitesService.addSite(this.site)
      .subscribe((res) => {
        console.log("response:", res);
        this._router.navigate(['/sites']);
      },
      (e: any) => {
        console.log("error:", e);
      });
  }

  onCancel() {
    console.log('onCancel');
    this._router.navigate(['/home']);
  }
}
