import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrls: ['./add-window.component.scss']
})
export class AddWindowComponent {
  @Output() onCloseWindow = new EventEmitter;
  closeToggle=false;
  constructor() { }

  closeWindow(){
    this.onCloseWindow.emit();

  }

}
