import { Component, OnInit, Input } from '@angular/core';
import { Parenteral } from "app/calculations/calculations-entry/calculations-edit/parenteral";
import { ParenteralsService } from "app/calculations/calculations-entry/calculations-edit/parenteral/parenterals.service";
import { EntryModeEnum } from "app/calculations/calculations-entry/calculations-edit/entryModeEnum";
import { EntryStatusEnum } from "app/calculations/calculations-entry/calculations-edit/entryStatusEnum";

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
  @Input("mode") mode :EntryModeEnum = EntryModeEnum.NONE ;
  displayId=0;

  constructor(private _parenteralsService: ParenteralsService) { }

  ngOnInit() {
    console.log("ParenteralComponent.ngOnInit mode:", this.mode);
    this.addParenteral = new Parenteral();
    this.parenterals = new Array();

    if(this.mode === EntryModeEnum.EDIT){
      //get existing data
      this._parenteralsService.getParenterals(this.id)
      .subscribe(pars => {
        console.log("pars:", pars);
        pars.forEach(par =>{
          par.status = EntryStatusEnum.NOT_CHANGED;
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
    let newPars:Parenteral[] = new Array();
    let updatePars:Parenteral[] = new Array();
    let deletePars:Parenteral[] = new Array();
    
    if(this.mode === EntryModeEnum.NEW){
      this._parenteralsService.saveNewParenterals(this.parenterals)
      .subscribe( results => console.log("onSave - results:", results));
    }
    else if(this.mode === EntryModeEnum.EDIT){
      this.parenterals.forEach( par =>{
        if(par.status === EntryStatusEnum.NOT_CHANGED){
          //do nothing
        }
        if(par.status === EntryStatusEnum.NEW){
          newPars.push(par);
        }
        if(par.status === EntryStatusEnum.CHANGED){
          updatePars.push(par);
        }
        if(par.status === EntryStatusEnum.DELETED){
          //check if it has an id
          if(par.id > 0){
            deletePars.push(par);
          }
          
        }
      })
      this._parenteralsService.saveAllParenterals(newPars,updatePars,deletePars)
      .subscribe(
        results => console.log("results: ", results)
      )
    }
    
  }
  onAdd(tab: string){
    //validate here
    let par = new Parenteral();
    par.displayId = ++this.displayId;
    par.calEntryId = this.id;
    par.status = EntryStatusEnum.NEW;
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

  onEdit(par:Parenteral){
    console.log("onEdit:", par);
    par.status = EntryStatusEnum.CHANGED;
  }
  onRemove(par:Parenteral){
    console.log("onRemove:", par);
    //right now par is being removed from the array
    //you might want to leave it in the array using the status
    //for anything like displaying it on the screen
    par.status = EntryStatusEnum.DELETED;
    // for(var i = 0; i<this.parenterals.length; i++){
    //   if(par.displayId === this.parenterals[i].displayId){       
    //     this.parenterals.splice(i,1);
    //     break;
    //   }
    // }
  }

  onLipidChange(event){
    console.log("onLipidChange- event:", event);
  }
}
