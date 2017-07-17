import { Component, OnInit } from '@angular/core';
import { Subject } from './subject';
import { Site } from '../sites/site';
import { SitesService } from '../sites/sites.service';
import { SubjectsService } from './subjects.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subjects-new',
  templateUrl: './subjects-new.component.html',
  //template: 'Hi there!',
  styleUrls: ['./subjects-new.component.css']
})
export class SubjectsNewComponent implements OnInit {
  subject: Subject = new Subject();
  sites: Site[] = new Array();

  constructor(private _router: Router,
    private _sitesService: SitesService,
    private _subjectsService: SubjectsService) { }

  ngOnInit() {
    this._sitesService.getSites().subscribe((res) => {
      console.log("sites res:", res);
      this.sites = res;
    })
  }

  onSubmit() {
    console.log("onSubmit subject:", this.subject);
    this._subjectsService.addSubject(this.subject)
      .subscribe((res) => {
        console.log("response:", res);
        this._router.navigate(['/subjects']);
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
