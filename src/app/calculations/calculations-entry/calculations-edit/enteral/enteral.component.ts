import { Component, OnInit, Input } from '@angular/core';
import { Formula } from '../formula'
import { EnteralService } from "app/calculations/calculations-entry/calculations-edit/enteral/enteral.service";
import { Enteral } from "app/calculations/calculations-entry/calculations-edit/enteral";
import { EntryModeEnum } from "app/calculations/calculations-entry/calculations-edit/entryModeEnum";


@Component({
  selector: 'enteral',
  templateUrl: './enteral.component.html',
  styleUrls: ['./enteral.component.css']
})

export class EnteralComponent implements OnInit {
  formulas: Formula[] = new Array();
  selectedFormula: Formula;
  currentVolume: number;
  enterals: Enteral[] = new Array();
  errorMessage: any;
  @Input("id") id;
  @Input("mode") mode :EntryModeEnum = EntryModeEnum.NONE ;
  displayId = 0;

  constructor(private _enteralService:EnteralService) { }

  ngOnInit() {
    console.log("EnteralComponent.ngOnInit mode:", this.mode);
    this._enteralService.getFormulas()
      .subscribe(
        formulas => this.formulas = formulas,
        error => this.errorMessage = <any>error);
  }

  onFormulaSelect(value){
    console.log("onFormulaSelect - value:", value);
    console.log("onFormulaSelect - selectedFormula", this.selectedFormula);
  }

  onSave(){
    this._enteralService.saveNewEnterals(this.enterals)
    .subscribe( results => console.log("onSave - results:", results))
  }

  onAdd(){
    let ent = new Enteral();
    ent.calEntryId = this.id;
    ent.displayId = ++this.displayId;
    ent.formulaListId = this.selectedFormula.id;
    ent.volume = this.currentVolume;
    ent.formulaName = this.selectedFormula.name;
    this.enterals.push(ent);
  }

  onRemove(ent:Enteral){
    console.log("onRemove:", ent);
    for (var i = 0; i < this.enterals.length; i++ ){
      if(ent.displayId === this.enterals[i].displayId){
        this.enterals.splice(i,1);
        //this.id--;
        break;
      }
    }
  }

}
