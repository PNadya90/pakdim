import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DataInfoService } from '../data-info.service';
import { Unsubscriber } from './unsubscriber';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent extends Unsubscriber implements OnInit {
  @Output() onShowItemDetails = new EventEmitter;
  items: any = [];
  itemsToShow: any = [];
  constructor(private httpClient: HttpClient, private srv: DataInfoService) {
    super();
  }

  ngOnInit() {
    this.srv.items.subscribe((data: any) => {
      this.items = data;
      this.itemsToShow = data;
    })

    this.srv.search
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((inputData: string) => {
        let inputSrch = inputData.toLowerCase();
        console.log(inputData);

        if (inputSrch === null || inputSrch === '') {
          this.itemsToShow = this.items.slice();
        }

        let arr = this.items.filter((item: any) => {
          return item.name.toLowerCase().includes(inputSrch);
        })
        if (arr && arr.length > 0) {
          this.itemsToShow = arr.slice();
        } else {
          this.itemsToShow = [];
        }
      })
  }

  showItemDetails(item:any) {
    this.onShowItemDetails.emit(item);
  }
  sortList(){
    this.itemsToShow.sort((a:any,b:any)=>a.name > b.name? 1: -1)
  }
}

