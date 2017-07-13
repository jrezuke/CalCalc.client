import { Component, OnInit } from '@angular/core';
import { Subject } from '../subjects/subject';
import { Site } from '../sites/site';
import { SitesService } from '../sites/sites.service';
import { SubjectsService } from '../subjects/subjects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  subjects: Subject[] = new Array();
  sites: Site[] = new Array();
  siteId: number;

  constructor(private _router: Router,
    private _sitesService: SitesService,
    private _subjectsService: SubjectsService) { }

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
    })    
  }

  
}
