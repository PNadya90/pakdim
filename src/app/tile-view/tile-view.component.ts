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

    this.httpClient.get('assets/data.json')
    .pipe(takeUntil(this.$onDestroy))
    .subscribe(data => {
      this.items = data;
      this.itemsToShow = this.items.slice();
    });
    
  }

}
