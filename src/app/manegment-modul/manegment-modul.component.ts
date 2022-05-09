import { Component, EventEmitter, Output } from '@angular/core';
import { DataInfoService } from '../data-info.service';

@Component({
  selector: 'app-manegment-modul',
  templateUrl: './manegment-modul.component.html',
  styleUrls: ['./manegment-modul.component.scss']
})
export class ManegmentModulComponent {

  @Output() onOpenAddWindow = new EventEmitter;

  constructor(private srv: DataInfoService) { }

  searchInfo(event: any) {
    // console.log(event);
    if (event && event.target) {
      this.srv.setInfo(event.target.value)
    }
  }

  openAddWindow() {
    this.onOpenAddWindow.emit();
  }


}
