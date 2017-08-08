import { Component, OnInit, Input } from '@angular/core';
import { Additive } from "app/calculations/calculations-entry/calculations-edit/additive";
import { AdditiveListItem } from "app/calculations/calculations-entry/calculations-edit/additiveListItem";
import { Unit } from "app/calculations/calculations-entry/calculations-edit/unit";
import { AdditivesService } from "app/calculations/calculations-entry/calculations-edit/additives/additives.service";

@Component({
  selector: 'additives',
  templateUrl: './additives.component.html',
  styleUrls: ['./additives.component.css']
})
export class AdditivesComponent implements OnInit {
  additivesList: AdditiveListItem[] = new Array();
  units: Unit[] = new Array();
  selectedAdditive
  additives: Additive[] = new Array();
  currentVolume: number;
  errorMessage: any;
  @Input("id") id;
  displayId = 0;
  
  constructor(private _additivesService: AdditivesService) { }

  ngOnInit() {
    this._additivesService.getSelectItems()
    .subscribe( data => {
      console.log("data:", data);
      this.units = data[0];
      this.additivesList = data[1];
    })
  }

}
