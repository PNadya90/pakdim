import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataInfoService {
  items: BehaviorSubject<any> = new BehaviorSubject<any>([])
  search = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/data.json')
      .subscribe((data: any) => {
        this.items.next(data);
      });
  }

  setInfo(data: string) {
    this.search.next(data)
  }

  setData(el: any) {
    let data: any[] = this.items.getValue();
    if (el.id) {
      let foundItem = data.find(((i: any) => i.id == el.id));
      foundItem.color = el.color;
      foundItem.description = el.description;
      foundItem.name=el.name;
      foundItem.lastUpdate=el.lastUpdate;
    }
    else {
      data.push(el);
    }

    this.items.next(data);

  }

}
