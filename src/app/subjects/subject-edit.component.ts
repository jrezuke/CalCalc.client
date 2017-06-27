import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  id: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log("params id:", this.id);
    });
  }

}
