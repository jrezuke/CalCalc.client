import { Component, OnInit } from '@angular/core';
import { Formula } from '../formula'
import { EnteralService } from "app/calculations/calculations-entry/calculations-edit/enteral/enteral.service";


@Component({
  selector: 'enteral',
  templateUrl: './enteral.component.html',
  styleUrls: ['./enteral.component.css']
})

export class EnteralComponent implements OnInit {
  formulas: Formula[] = new Array();
  selectedFormula: Formula;
  errorMessage: any;

  constructor(private _enteralService:EnteralService) { }

  ngOnInit() {
    this._enteralService.getFormulas()
      .subscribe(
        formulas => this.formulas = formulas,
        error => this.errorMessage = <any>error);
  }

  onFormulaSelect(value){
    console.log("onFormulaSelect - value:", value);
    console.log("onFormulaSelect - selectedFormula", this.selectedFormula);
  }

}
