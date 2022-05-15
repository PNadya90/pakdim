import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DataInfoService } from '../data-info.service';
import { Unsubscriber } from '../info/unsubscriber';

@Component({
  selector: 'app-tile-view',
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.scss']
})
export class TileViewComponent extends Unsubscriber implements OnInit {
  items: any = [];
  itemsToShow: any = [];
  constructor(private httpClient: HttpClient, private srv: DataInfoService) { 
    super();
  }

  ngOnInit() {
    this.srv.items.subscribe((data:any)=>{
      this.items=data;
      this.itemsToShow=data;
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

}
