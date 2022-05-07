import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DataInfoService } from '../data-info.service';
import { Unsubscriber } from './unsubscriber';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent extends Unsubscriber implements OnInit {
  items: any = [];
  itemsToShow: any = [];
  // searchData = ''
  constructor(private httpClient: HttpClient, private srv: DataInfoService) {
    super();
  }

  ngOnInit() {

    this.httpClient.get('assets/data.json')
      .pipe(takeUntil(this.$onDestroy))
      .subscribe(data => {
        this.items = data;
        this.itemsToShow = this.items.slice();
      });

    this.srv.search.pipe(takeUntil(this.$onDestroy)).subscribe((inputData: string) => {
       let inputSrch  = inputData.toLowerCase();
       console.log(inputData);
       

      if (inputSrch  === null || inputSrch  === '') {
        this.itemsToShow = this.items.slice();
      }

      let arr = this.items.filter((item:any) => {
      return item.name.toLowerCase().includes(inputSrch);
      })
      if(arr && arr.length > 0 ){
        this.itemsToShow = arr.slice();
      } else {
        this.itemsToShow = [];
      }
    })

  }


}
