import { Component, OnInit } from '@angular/core';
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
  id = 0;
  
  errorMessage: any;

  constructor(private _fiService:FluidInfusionsService) { }

  ngOnInit() {
    this._fiService.getDextroseConcentrations()
      .subscribe(
        dcs => this.concentrations = dcs,
        error => this.errorMessage = <any>error);
  }

  onSelectChange(event){
    console.log("onSelectChange -event:", event.target.value);
    console.log("currentDc:", this.currentDc);
  }

  onAdd(){    
    this.fiDisplay = new FluidInfusionDisplay();
    this.fiDisplay.id = ++this.id;
    this.fiDisplay.concentration = this.currentDc.concentration;
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
