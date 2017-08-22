import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Parenteral } from "app/calculations/calculations-entry/calculations-edit/parenteral";
import { ParenteralsService } from "app/calculations/calculations-entry/calculations-edit/parenteral/parenterals.service";
import { EntryModeEnum } from "app/calculations/calculations-entry/calculations-edit/entryModeEnum";
import { EntryStatusEnum } from "app/calculations/calculations-entry/calculations-edit/entryStatusEnum";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { TooltipDirective } from 'ngx-bootstrap/tooltip'
import { TabsetComponent } from 'ngx-bootstrap';
import { FormGroup, FormControl, FormControlName, FormBuilder } from "@angular/forms";


@Component({
  selector: 'parenteral',
  templateUrl: './parenteral.component.html',
  styleUrls: ['./parenteral.component.css']
})
export class ParenteralComponent implements OnInit {
  @ViewChild("parenteralTabs") parenteralTabs: TabsetComponent;
  parenterals: Parenteral[] = new Array();
  addParenteral: Parenteral;
  editParenteral: Parenteral;
  addLipVolume: number;
  addDexVolume: number;
  @Input("id") id;
  @Input("mode") mode: EntryModeEnum = EntryModeEnum.NONE;
  displayId = 0;
  editMode = false;
  dexForm: FormGroup;
  lipForm: FormGroup;  

  private bsParenterals = new BehaviorSubject<Parenteral[]>(this.parenterals);
  //obsParenterals = this.bsParenterals.asObservable();

  constructor(private _parenteralsService: ParenteralsService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ParenteralComponent.ngOnInit mode:", this.mode);
    this.dexForm = this._formBuilder.group({
      dextrose: {value:'', disabled:false},
      amino: null,
      dexVolume: null
    });
    this.lipForm = this._formBuilder.group({
      lipid: null,
      lipVolume: null
    });
    this.addParenteral = new Parenteral();
    this.parenterals = new Array();

    if (this.mode === EntryModeEnum.EDIT) {
      //get existing data
      this._parenteralsService.getParenterals(this.id)
        .subscribe(pars => {
          console.log("pars:", pars);
          pars.forEach(par => {
            par.status = EntryStatusEnum.NOT_CHANGED;
            par.displayId = ++this.displayId;

            if (par.dextrose) {
              par.type = "dextrose"
            }
            else {
              par.type = "lipid"
            }

            this.parenterals.push(par);
          });
        })
    }

  }

  onSave() {
    let newPars: Parenteral[] = new Array();
    let updatePars: Parenteral[] = new Array();
    let deletePars: Parenteral[] = new Array();

    if (this.mode === EntryModeEnum.NEW) {
      this._parenteralsService.saveNewParenterals(this.parenterals)
        .subscribe(results => console.log("onSave - results:", results));
    }
    else if (this.mode === EntryModeEnum.EDIT) {
      this.parenterals.forEach(par => {
        if (par.status === EntryStatusEnum.NOT_CHANGED) {
          //do nothing
        }
        if (par.status === EntryStatusEnum.NEW) {
          newPars.push(par);
        }
        if (par.status === EntryStatusEnum.CHANGED) {
          updatePars.push(par);
        }
        if (par.status === EntryStatusEnum.DELETED) {
          //check if it has an id
          if (par.id > 0) {
            deletePars.push(par);
          }

        }
      })
      this._parenteralsService.saveAllParenterals(newPars, updatePars, deletePars)
        .subscribe(
        results => console.log("results: ", results)
        )
    }

  }
  onAdd(tab: string) {
    //validate here
    let par = new Parenteral();
    par.displayId = ++this.displayId;
    par.calEntryId = this.id;
    par.status = EntryStatusEnum.NEW;
    if (tab === "dextrose") {
      par.dextrose = this.addParenteral.dextrose;
      par.amino = this.addParenteral.amino;
      par.volume = this.addDexVolume;
      par.type = "dextrose";
    }
    else {
      par.lipid = this.addParenteral.lipid;
      par.volume = this.addLipVolume;
      par.type = "lipid";
    }
    this.parenterals.push(par);
  }

  onEdit(par: Parenteral) {
    console.log("onEdit:", par);
    //you don't want to change the status of NEW

    if (par.type === "dextrose") {
      this.addParenteral.amino = par.amino;
      this.addParenteral.dextrose = par.dextrose;
      this.addDexVolume = par.volume;
      this.parenteralTabs.tabs[0].active = true;
    }
    else {
      this.addParenteral.lipid = par.lipid;
      console.log("addParenteral.lipid", this.addParenteral.lipid)
      this.addLipVolume = par.volume;
      this.parenteralTabs.tabs[1].active = true;
    }
    this.editParenteral = par;
    this.editMode = true;    

  }

  onSaveChanges(type: string){    
    if(this.editParenteral.type === "dextrose"){
      this.editParenteral.amino = this.addParenteral.amino;
      this.editParenteral.dextrose = this.addParenteral.dextrose;
      this.editParenteral.volume = this.addDexVolume;
    }
    else{
      this.editParenteral.lipid = this.addParenteral.lipid;
      this.editParenteral.volume = this.addLipVolume;
    }
    if (this.editParenteral.status === EntryStatusEnum.NOT_CHANGED) {
      this.editParenteral.status = EntryStatusEnum.CHANGED;
    }
    this.editMode = false;
  }

  onCancelChanges(){
    this.editMode = false;
  }

  onRemove(par: Parenteral) {
    console.log("onRemove:", par);
    //right now par is being removed from the array
    //you might want to leave it in the array using the status
    //for anything like displaying it on the screen
    par.previousStatus = par.status;
    par.status = EntryStatusEnum.DELETED;
    console.log("par.status", par.status);
    console.log("par.previousStatus", par.previousStatus);

    // for(var i = 0; i<this.parenterals.length; i++){
    //   if(par.displayId === this.parenterals[i].displayId){       
    //     this.parenterals.splice(i,1);
    //     break;
    //   }
    // }
  }

  onUndoRemove(par: Parenteral) {
    console.log("onUndoRemove:", par);
    //right now par is being removed from the array
    //you might want to leave it in the array using the status
    //for anything like displaying it on the screen
    console.log("par.status", par.status);
    par.status = par.previousStatus;
    console.log("par.previousStatus", par.previousStatus);

    // for(var i = 0; i<this.parenterals.length; i++){
    //   if(par.displayId === this.parenterals[i].displayId){       
    //     this.parenterals.splice(i,1);
    //     break;
    //   }
    // }
  }

  onLipidChange(event) {
    console.log("onLipidChange- event:", event);
  }
}
