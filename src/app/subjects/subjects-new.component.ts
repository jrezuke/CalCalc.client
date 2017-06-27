import { Component, OnInit } from '@angular/core';
import { Subject } from './subject';
import { Site } from '../sites/site';
import { SitesService } from '../sites/sites.service'

@Component({
  selector: 'app-subjects-new',
  templateUrl: './subjects-new.component.html',
  //template: 'Hi there!',
  styleUrls: ['./subjects-new.component.css']
})
export class SubjectsNewComponent implements OnInit {
  subject: Subject = new Subject();
  sites: Site[] = new Array();
  
  constructor(private _sitesService : SitesService) { }

  ngOnInit() {
    this._sitesService.getSites().subscribe((res)=>{
      console.log("sites res:", res);
      this.sites = res;
    })
  }

  onSubmit(){
    console.log("onSubmit subject:", this.subject);
  }

}
