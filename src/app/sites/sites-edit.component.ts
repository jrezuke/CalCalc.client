import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Site } from './site';
import { SitesService } from './sites.service';

@Component({
  selector: 'app-sites-edit',
  templateUrl: './sites-edit.component.html',
  styleUrls: ['./sites-edit.component.css']
})
export class SitesEditComponent implements OnInit {
  site: Site;
  id: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _sitesService: SitesService) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe(val => {
      console.log("val:", val);
      this.site = val['siteEdit'];
    });
    // this._activatedRoute.params.subscribe(params => {
    //   this.id = params['id']; // (+) converts string 'id' to a number
    //   console.log("params id:", this.id);

    //   this._sitesService.getSite(this.id).subscribe((res) => {
    //     console.log("res:", res);
    //     this.site = res;
    //   },
    //     (e: any) => {
    //       console.log('error:', e);
    //     });
    // });

  }

  onSubmit() {
    console.log("onSubmit form:", this.site);
    this._sitesService.updateSite(this.site)
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
