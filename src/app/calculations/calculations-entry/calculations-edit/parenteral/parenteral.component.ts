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

  onAdd(){
    //validate here
    if(this.addParenteral.dextrose){
      this.addParenteral.volume = this.addDexVolume;
    }
    else{
      this.addParenteral.volume = this.addLipVolume;
    }
    this.parenterals.push(this.addParenteral);
  }
  onLipidChange(event){
    console.log("onLipidChange- event:", event);
  }
}
