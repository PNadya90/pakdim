import { Directive, OnDestroy } from '@angular/core';
import { Subject} from 'rxjs'; 
@Directive()
export class Unsubscriber implements OnDestroy{
    protected $onDestroy:Subject<boolean> = new Subject<boolean>();
    ngOnDestroy(){
        this.$onDestroy.next(true)
        this.$onDestroy.complete();
      }
}