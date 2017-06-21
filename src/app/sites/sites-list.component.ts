import { Component, OnInit } from '@angular/core';
import { SitesService } from './sites.service';
import { Site } from './site';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {
  public sites: Site[];
  public errorMessage: any;

  constructor(private _sitesService: SitesService, private _router: Router) { }

  ngOnInit() {
    this._sitesService.getSites()
      .subscribe(
      sites => this.sites = sites,
      error => this.errorMessage = <any>error);
  }
  onNew() {
    console.log("onNew");
    this._router.navigate(['/sites/new']);
  }
  onEdit(site: Site) {
    console.log("onEdit site:", site);
    this._router.navigate(['/sites', site.id]);

  }
}
