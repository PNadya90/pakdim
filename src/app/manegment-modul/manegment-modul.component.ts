import { Component, Output } from '@angular/core';
import { DataInfoService } from '../data-info.service';

@Component({
  selector: 'app-manegment-modul',
  templateUrl: './manegment-modul.component.html',
  styleUrls: ['./manegment-modul.component.scss']
})
export class ManegmentModulComponent {

  @Output() openAddWindow() {
     
  }
  constructor(private srv: DataInfoService) { }

  searchInfo(event: any) {
    // console.log(event);
    if (event && event.target) {
      this.srv.setInfo(event.target.value)
    }
  }



}
