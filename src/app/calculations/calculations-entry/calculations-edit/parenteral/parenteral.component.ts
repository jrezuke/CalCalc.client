import { Component, OnInit, Input } from '@angular/core';
import { Parenteral } from "app/calculations/calculations-entry/calculations-edit/parenteral";
import { ParenteralsService } from "app/calculations/calculations-entry/calculations-edit/parenteral/parenterals.service";

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
  @Input("id") id;
  displayId:number;

  constructor(private _parenteralsService: ParenteralsService) { }

  ngOnInit() {
    this.addParenteral = new Parenteral();
    this.parenterals = new Array();
  }

  onSave(){
    this._parenteralsService.saveNewParenterals(this.parenterals)
    .subscribe( results => console.log("onSave - results:", results))
  }
  onAdd(tab: string){
    //validate here
    let par = new Parenteral();
    par.displayId = ++this.displayId;
    par.calEntryId = this.id;
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
