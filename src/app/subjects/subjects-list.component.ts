import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service'
import { Subject } from './subject';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "subject-list",
  //   template: `<div>
  //   <h2>subjects list is working!</h2>
  //   <router-outlet></router-outlet>
  // </div>`
  templateUrl: "./subjects-list.component.html",
  styleUrls: ['./subjects-list.component.css']

})

export class SubjectsListComponent implements OnInit {
  public subjects: Subject[];
  public errorMessage: any;
  _subjectsService: SubjectsService;

  constructor(subjectsService: SubjectsService, private _router: Router) {
    this._subjectsService = subjectsService;

  }

  ngOnInit(): void {
    this._subjectsService.getSubjects()
      .subscribe(
      subjects => this.subjects = subjects,
      error => this.errorMessage = <any>error);
  }

  onNew() {
    console.log("onNew");
    this._router.navigate(['/subjects/new']);
  }
  onEdit(subject: Subject) {
    console.log("onEdit subject:", subject);
    this._router.navigate(['/subjects', subject.id]);

  }
}
