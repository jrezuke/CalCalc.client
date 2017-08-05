import { Component, OnInit, Input } from '@angular/core';
import { DextroseConcentration } from "../dextrose-concentration";
import { FluidInfusionsService } from "./fluid-infusions.service";
import { FluidInfusion, FluidInfusionDisplay } from "../fluid-infusion";

@Component({
  selector: 'fluid-infusions',
  templateUrl: './fluid-infusions.component.html',
  styleUrls: ['./fluid-infusions.component.css']
})
export class FluidInfusionsComponent implements OnInit {
  concentrations: DextroseConcentration[] = new Array();
  currentDc: DextroseConcentration = new DextroseConcentration();
  currentVolume: number;
  fluidInfusion: FluidInfusion;
  fiDisplay: FluidInfusionDisplay;
  fluidInfusions: FluidInfusionDisplay[] = new Array(); 
  @Input("id") id;
  displayId:number;
  
  errorMessage: any;

  constructor(private _fiService:FluidInfusionsService) { }

  ngOnInit() {
    console.log("FluidInfusionsComponent.ngOnInit - id:", this.id);
    this._fiService.getDextroseConcentrations()
      .subscribe(
        dcs => this.concentrations = dcs,
        error => this.errorMessage = <any>error);
  }

  onSave(){
    console.log("onSave:", this.fluidInfusions);
    //convert to fluidInfusions
    let fls:FluidInfusion[] = new Array()
    for(let i=0; i<this.fluidInfusions.length; i++){
      let fl = new FluidInfusion();
      fl.calEntryId = this.id;
      fl.dextroseConcentrationId = this.fluidInfusions[i].concentrationId;
      fl.volume = this.fluidInfusions[i].volume;
      fls.push(fl);
    }
    this._fiService.saveNewFluidInfusions(fls)
    .subscribe( results => console.log("onSave - results:", results))
  }

  onSelectChange(event){
    console.log("onSelectChange -event:", event.target.value);
    console.log("currentDc:", this.currentDc);
  }

  onAdd(){    
    this.fiDisplay = new FluidInfusionDisplay();
    this.fiDisplay.id = ++this.displayId;
    this.fiDisplay.concentration = this.currentDc.concentration;
    this.fiDisplay.concentrationId = this.currentDc.id;
    this.fiDisplay.volume = this.currentVolume;
    console.log("onAdd - fluid infusion:", this.fiDisplay);

    this.fluidInfusions.push(this.fiDisplay);

  }

  onRemove(fid:FluidInfusionDisplay){    
    console.log("onRemove:", fid);
    for (var i = 0; i < this.fluidInfusions.length; i++ ){
      if(fid.id === this.fluidInfusions[i].id){
        this.fluidInfusions.splice(i,1);
        //this.id--;
        break;
      }
    }
  }

}
