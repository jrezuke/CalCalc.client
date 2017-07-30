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
    if(tab === "parenteral"){
      this.addParenteral.volume = this.addDexVolume;
      this.addParenteral.type === "parenteral";
    }
    else{
      this.addParenteral.volume = this.addLipVolume;
      this.addParenteral.type === "lipid";
    }
    this.parenterals.push(this.addParenteral);
  }
  onLipidChange(event){
    console.log("onLipidChange- event:", event);
  }
}
