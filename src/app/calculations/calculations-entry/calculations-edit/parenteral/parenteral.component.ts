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
  id = 0;

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
      par.id = ++this.id;
    }
    else{
      par.lipid = this.addParenteral.lipid;
      par.volume = this.addLipVolume;
      par.type = "lipid";
      par.id = ++this.id;
    }
    this.parenterals.push(par);
  }

  onRemove(par:Parenteral){
    console.log("onRemove:", par);
    for(var i = 0; i<this.parenterals.length; i++){
      if(par.id === this.parenterals[i].id){
        this.parenterals.splice(i,1);
        break;
      }
    }
  }

  onLipidChange(event){
    console.log("onLipidChange- event:", event);
  }
}
