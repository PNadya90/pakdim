import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInfoService {
  search = new Subject<string>();
  constructor() { }

  setInfo(data:string){
    this.search.next(data)
  }


}
