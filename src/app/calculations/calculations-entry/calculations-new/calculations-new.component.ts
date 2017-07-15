import { Component, OnInit } from '@angular/core';
import { Subject } from "app/subjects/subject";
import { CalculationsService } from "app/calculations/calculations.service";

@Component({
  selector: 'calculations-new',
  templateUrl: './calculations-new.component.html',
  styleUrls: ['./calculations-new.component.css']
})
export class CalculationsNewComponent implements OnInit {
  subject: Subject;

  constructor(private _calculationsService: CalculationsService) { }

  ngOnInit() {
    this.subject = this._calculationsService.subject;
    
  }

}
