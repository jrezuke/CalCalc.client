import { Component, OnInit } from '@angular/core';
import { Subject } from '../subjects/subject';
import { Site } from '../sites/site';
import { SitesService } from '../sites/sites.service';
import { SubjectsService } from '../subjects/subjects.service';
import { Router } from '@angular/router';
import { CalculationsService } from "app/calculations/calculations.service";
import { CalculationEntry } from "app/calculations/calculation-entry";

@Component({
  selector: 'calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  subjects: Subject[] = new Array();
  sites: Site[] = new Array();
  entries: CalculationEntry[] = new Array();
  siteId: number;

  constructor(private _router: Router,
    private _sitesService: SitesService,
    private _subjectsService: SubjectsService,
    private _calculationsService: CalculationsService) { }

  ngOnInit() {
    this._sitesService.getSites().subscribe((res) => {
      console.log("sites res:", res);
      this.sites = res;
    })    
  }

  onSiteSelect(value: string){
    console.log("CalculationsComponent.onSiteSelect - value:", value);
    this._subjectsService.getSubjectsBySite(value).subscribe((res) => {
      console.log("subjects res:", res);
      this.subjects = res;
      this.entries = new Array();
    })    
  }

  onSubjectSelect(subject: Subject){
    console.log("CalculationsComponent.onSubjectSelect - value:", subject.subjectId);
    this._calculationsService.subject = subject;
    this._calculationsService.getEntriesForSubject(subject.id).subscribe((res) => {
      console.log("entries res:", res);
      this.entries = res;
    })    
  }
  
  onEntrySelect(ent:CalculationEntry){
    console.log("onEntrySelect:", ent.id);
    this._router.navigate(['/calculations/entry/' + ent.id]);
  }

  onCancel() {
    console.log('onCancel');
    this._router.navigate(['/home']);
  }

  onNewEntry(){
    console.log('onNewEntry');
    this._router.navigate(['/calculations/entry/new']);
  }
}
