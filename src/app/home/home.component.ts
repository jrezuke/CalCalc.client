import { Component, OnInit, ViewChild } from '@angular/core';
import { SecurityService } from "app/shared/security.service";
import { ConfirmModalComponent } from "app/shared/modals/confirm-modal.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(ConfirmModalComponent) confirmModal: ConfirmModalComponent;
  
  constructor(private _securityService: SecurityService) { }

  ngOnInit() {
    this._securityService.state$.subscribe(v => {
      console.log("HomeComponent.ngOnItit _securityService.state", v);
    })
  }

  onShowModalClick(modalType: string){
    this.confirmModal.Show();    
  }
  onModalClicked(m: string){
    console.log("onModalClicked, m", m)
    if(m === "ok"){
      this.confirmModal.Hide();
      //this.informModal.Hide();
    }
  }

}
