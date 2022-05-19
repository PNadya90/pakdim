import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataInfoService } from '../data-info.service';

@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrls: ['./add-window.component.scss']
})
export class AddWindowComponent implements OnInit, OnChanges {
  @Output() onCloseWindow = new EventEmitter;
  closeToggle = false;
  form!: FormGroup;
  colorForForm = 'black';
  @Input() itemDetails: any;

  constructor(private httpClient: HttpClient, private srv: DataInfoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    let itemColor = changes['itemDetails'].currentValue?.color;
    this.colorForForm = itemColor;
    this.form?.controls['name'].setValue(this.itemDetails['name']);
    this.form?.controls['tagDiscription'].setValue(this.itemDetails['description']);
  }

  closeWindow() {
    this.onCloseWindow.emit();
    document.dispatchEvent(new Event("closeColorContainer"));
    this.cleanForm()
  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('',),
      tagDiscription: new FormControl('',),
    });

  }

  onSubmit() {
    // debugger
    let today = new Date();
    const jstoday = formatDate(today, 'dd/MM/yyyy', 'en-US');
    let changeDate = formatDate(today, 'dd/MM/yyyy', 'en-US');
    let newInfo = {
      id: this.itemDetails.id,
      name: this.form.controls['name'].value,
      color: this.colorForForm,
      description: this.form.controls['tagDiscription'].value,
      createDate: jstoday,
      lastUpdate: changeDate,
      createdBy: 'User'
    }
    this.srv.setData(newInfo);
    this.closeWindow();
  }

  pickedColor(event: any) {
    this.colorForForm = event;
  }

  cleanForm() {
    this.form.reset();
    if (this.itemDetails) {
      this.itemDetails.color = '';
    }

  }
}
