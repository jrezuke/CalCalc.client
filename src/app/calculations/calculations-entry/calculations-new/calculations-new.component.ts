import { Component, OnInit } from '@angular/core';
import { Subject } from "app/subjects/subject";
import { CalculationsService } from "app/calculations/calculations.service";
import { CalculationEntry } from "app/calculations/calculation-entry";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'calculations-new',
  templateUrl: './calculations-new.component.html',
  styleUrls: ['./calculations-new.component.css']
})
export class CalculationsNewComponent implements OnInit {
  subject: Subject;
  entry: CalculationEntry

  constructor(private _calculationsService: CalculationsService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this url is guarded to have a subject not null from _calculationsService
    this.subject = this._calculationsService.subject;
    
    console.log("CalculationsNewComponent.ngOnInit - subject", this.subject);
    this.entry = new CalculationEntry();
    this.entry.subjectId = this.subject.id;
  }

  onSubmit(){
    //let entId = this.entry.id.toString();
    console.log("onSubmit entry:", this.entry);
        
    this._calculationsService.addEntry(this.entry)
      .subscribe((res:CalculationEntry) => {
        console.log("response:", res);
        this._router.navigate(['../' + res.id.toString() ], {relativeTo: this._activatedRoute, queryParams:{mode:"new"}} );    
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
