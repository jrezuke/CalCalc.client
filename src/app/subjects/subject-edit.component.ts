import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';
import { Site } from '../sites/site';
import { SitesService } from '../sites/sites.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  id: string;
  subject: Subject;
  sites: Site[] = new Array();
  showForm = true;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,    
    private _sitesService: SitesService,
    private _subjectsService: SubjectsService
    ) { }

  ngOnInit() {
    console.log("_activatedRoute", this._activatedRoute);
    this._router.events.subscribe(event =>{
      if (event instanceof NavigationEnd) {
        // this._accountService.showSpinner = false;
        console.log('entry.Component.ngInit.this._router.events.subscribe NavigationEnd-event:', event);
        if(event.url.includes("entries")){
          this.showForm = false;
        }
        else{
          this.showForm = true;
        }
        //this.onPathChange(event.url);
      }
    })

    this._activatedRoute.data.subscribe(val => {
      console.log("val:", val);
      this.subject = val['subjectEdit'];
      this.subject.startDate = this._convertJsonDateStringToMmddyyy(this.subject.startDate);
      //this.subject.startDate = this.parseDate(this.subject.startDate).toDateString();
      console.log("subject:", this.subject);
    });
    this._sitesService.getSites().subscribe((res) => {
      console.log("sites res:", res);
      this.sites = res;
    })

  }

  // parse a date in yyyy-mm-dd format
  parseDate(input: any) {
    var parts = input.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based
  }

  onSubmit() {
    console.log("onSubmit form:", this.subject);
    this._subjectsService.updateSubject(this.subject)
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

  private _convertJsonDateStringToMmddyyy(date: string){
    let yr = date.substr(0,4);
    let mo = date.substr(5,2);
    let da = date.substr(8,2);
    return mo + "-" + da + "-" + yr; 
  }
}
