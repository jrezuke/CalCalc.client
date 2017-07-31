import { Component, OnInit } from '@angular/core';
import { Parenteral } from "app/calculations/calculations-entry/calculations-edit/parenteral";

@Component({
  selector: 'parenteral',
  templateUrl: './parenteral.component.html',
  styleUrls: ['./parenteral.component.css']
})
export class ParenteralComponent implements OnInit {
  parenterals: Parenteral[];
  addParenteral: Parenteral; 
  addLipVolume: number;
  addDexVolume: number;

  constructor() { }

  ngOnInit() {
    this.addParenteral = new Parenteral();
    this.parenterals = new Array();
  }

  onAdd(tab: string){
    //validate here
    let par = new Parenteral();
    if(tab === "parenteral"){
      par.dextrose = this.addParenteral.dextrose;
      par.amino = this.addParenteral.amino; 
      par.volume = this.addDexVolume;
      par.type = "parenteral";
    }
    else{
      par.lipid = this.addParenteral.lipid;
      par.volume = this.addLipVolume;
      par.type = "lipid";
    }
    this.parenterals.push(par);
  }
  onLipidChange(event){
    console.log("onLipidChange- event:", event);
  }
}
