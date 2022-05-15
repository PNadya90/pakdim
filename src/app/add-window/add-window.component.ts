import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataInfoService } from '../data-info.service';

@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrls: ['./add-window.component.scss']
})
export class AddWindowComponent implements OnInit {
  @Output() onCloseWindow = new EventEmitter;
  closeToggle = false;
  form!: FormGroup;
  colorForForm = 'black';
  constructor(private httpClient: HttpClient, private srv: DataInfoService) { }

  closeWindow() {
    this.onCloseWindow.emit();
    document.dispatchEvent(new Event("closeColorContainer"))
  }
  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('',),
      tagDiscription: new FormControl('',),
    });

  }

  onSubmit() {
    let today = new Date();
    const jstoday = formatDate(today, 'dd/MM/yyyy', 'en-US');
    let changeDate = formatDate(today, 'dd/MM/yyyy', 'en-US');
    let newInfo = {
      name: this.form.controls['name'].value,
      color: this.colorForForm,
      tagDiscription: this.form.controls['tagDiscription'].value,
      createDate: jstoday,
      lastUpdate: changeDate,
      createdBy:'User'
    }
    this.srv.setData(newInfo); 
    this.closeWindow();
  }

  pickedColor(event: any) {
    this.colorForForm = event;
  }
}
