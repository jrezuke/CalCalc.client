import { Component, OnInit, Input } from '@angular/core';
import { Additive } from "app/calculations/calculations-entry/calculations-edit/additive";
import { AdditiveListItem } from "app/calculations/calculations-entry/calculations-edit/additiveListItem";
import { Unit } from "app/calculations/calculations-entry/calculations-edit/unit";
import { AdditivesService } from "app/calculations/calculations-entry/calculations-edit/additives/additives.service";
import { EntryModeEnum } from "app/calculations/calculations-entry/calculations-edit/entryModeEnum";

@Component({
  selector: 'additives',
  templateUrl: './additives.component.html',
  styleUrls: ['./additives.component.css']
})
export class AdditivesComponent implements OnInit {
  additivesList: AdditiveListItem[] = new Array();
  units: Unit[] = new Array();
  selectedAdditive: AdditiveListItem;
  additives: Additive[] = new Array();
  currentVolume: number;
  errorMessage: any;
  @Input("id") id;
  @Input("mode") mode :EntryModeEnum = EntryModeEnum.NONE ;
  displayId = 0;
  
  constructor(private _additivesService: AdditivesService) { }

  ngOnInit() {
    console.log("AdditivesComponent.ngOnInit mode:", this.mode);
    this._additivesService.getSelectItems()
    .subscribe( data => {
      console.log("data:", data);
      this.units = data[0];
      this.additivesList = data[1];
    })
  }

  onSave(){
    this._additivesService.saveNewAdditives(this.additives)
    .subscribe( results => console.log("onSave - results:", results))
  }

  onAdd(){
    let add = new Additive();
    add.calEntryId = this.id;
    add.displayId = ++this.displayId;
    add.additiveListId = this.selectedAdditive.id;
    add.volume = this.currentVolume;
    add.additiveName = this.selectedAdditive.name;
    this.additives.push(add);
  }

  onAdditiveSelect(value){
    console.log("onAdditiveSelect - value:", value);
    console.log("onAdditiveSelect - selectedAdditive", this.selectedAdditive);
  }

}
