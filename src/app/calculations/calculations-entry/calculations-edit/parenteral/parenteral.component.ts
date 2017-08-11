import { Component, OnInit, Input } from '@angular/core';
import { Parenteral } from "app/calculations/calculations-entry/calculations-edit/parenteral";
import { ParenteralsService } from "app/calculations/calculations-entry/calculations-edit/parenteral/parenterals.service";

@Component({
  selector: 'parenteral',
  templateUrl: './parenteral.component.html',
  styleUrls: ['./parenteral.component.css']
})
export class ParenteralComponent implements OnInit {
  parenterals: Parenteral[] = new Array();
  addParenteral: Parenteral; 
  addLipVolume: number;
  addDexVolume: number;
  @Input("id") id;
  @Input("mode") mode;
  displayId=0;

  constructor(private _parenteralsService: ParenteralsService) { }

  ngOnInit() {
    console.log("ParenteralComponent.ngOnInit mode:", this.mode);
    this.addParenteral = new Parenteral();
    this.parenterals = new Array();

    if(this.mode === "edit"){
      //get existing data
      this._parenteralsService.getParenterals(this.id)
      .subscribe(pars => {
        pars.forEach(par =>{
          par.displayId = ++this.displayId;
          if(par.dextrose){
            par.type = "dextrose"
          }
          else{
            par.type = "lipid"
          }
          this.parenterals.push(par);      
        }); 
      })
    }
    
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
    if(tab === "dextrose"){
      par.dextrose = this.addParenteral.dextrose;
      par.amino = this.addParenteral.amino; 
      par.volume = this.addDexVolume;
      par.type = "dextrose";      
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
