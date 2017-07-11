import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'

@Component({
    moduleId: module.id,
    selector: 'subject-select-modal',
    templateUrl: 'subject-select-modal.component.html'
})

export class SubjectSelectModalComponent implements OnInit {
    @ViewChild('smModalInform') smModal:ModalDirective;
    @Input() body = "This is my body";
    @Output() onClicked = new EventEmitter<string>();
    @Output() onInformation = new EventEmitter<string>();
    information: string;
    
    constructor() { }

    ngOnInit() { }

    onOk(){
        console.log("SubjectSelectModalComponent.onOk emit onClicked(ok), onInformation(this.information)");
        this.onClicked.emit("ok");
        this.onInformation.emit(this.information);
    }
    onCancel(){
        console.log("SubjectSelectModalComponent.onCancel emit onClicked(cancel)");
        this.onClicked.emit("cancel");
    }

    Show(){
        this.smModal.show();
    }

    Hide(){
        
        this.smModal.hide();
    }
    setInformation(){
        this.onInformation.emit(this.information);
    }
}