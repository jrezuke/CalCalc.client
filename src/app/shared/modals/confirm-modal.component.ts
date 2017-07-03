import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'

@Component({
    moduleId: module.id,
    selector: 'confirm-modal',
    templateUrl: 'confirm-modal.component.html'
})

export class ConfirmModalComponent implements OnInit {
    @ViewChild('smModalConfirm') smModal:ModalDirective;

    @Input() title = "Please Confirm";
    @Input() body = "This is my body";
    @Output() onClicked = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    onOk(){
        console.log("onOk");
        this.onClicked.emit("ok");
    }
    onCancel(){
        console.log("onCancel");
        this.onClicked.emit("cancel");
    }

    Show(){
        this.smModal.show();
    }

    Hide(){
        this.smModal.hide();
    }
}