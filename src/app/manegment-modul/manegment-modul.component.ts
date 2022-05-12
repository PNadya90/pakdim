import { Component, EventEmitter, Output } from '@angular/core';
import { DataInfoService } from '../data-info.service';

@Component({
  selector: 'app-manegment-modul',
  templateUrl: './manegment-modul.component.html',
  styleUrls: ['./manegment-modul.component.scss']
})
export class ManegmentModulComponent {

  @Output() onOpenAddWindow = new EventEmitter;
  @Output() onShowTileView = new EventEmitter;
  @Output() onShowLIstView = new EventEmitter;
  tileIcon: any;
  listIcon: any;
  constructor(private srv: DataInfoService) { }

  ngAfterViewInit() {
    this.tileIcon = document.querySelectorAll<HTMLElement>('.tileIcon-fill');
    this.listIcon = document.querySelectorAll<HTMLElement>('.listIcon-fill');

  }

  searchInfo(event: any) {
    // console.log(event); 
    if (event && event.target) {
      this.srv.setInfo(event.target.value)
    }
  }

  openAddWindow() {
    this.onOpenAddWindow.emit();

  }

  showTileView() {
    this.onShowTileView.emit();
    this.tileIcon.forEach((el: any) => {
      el.style.fill = '#007AF9';
      el.style.opacity = 1;
      console.log(this.tileIcon);

    });

    this.listIcon.forEach((el: any) => {
      el.style.fill = '#0e4f6e';
      el.style.opacity = 0.55;
    })

  }

  showListView() {
    this.onShowLIstView.emit();
    this.tileIcon.forEach((el: any) => {
      el.style.fill = '#0e4f6e';
      el.style.opacity = 0.55;

    });

    this.listIcon.forEach((el: any) => {
      el.style.fill = '#007AF9';
      el.style.opacity = 1;
    })
  }
}
