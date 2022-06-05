
import { Component, Input,  SimpleChange } from '@angular/core';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss']
})
export class RaitingComponent {
  @Input()
  raiting: any;
  userFilms:any;

  ngOnChanges(val:SimpleChange){
    //@ts-ignore
    if(val.raiting.currentValue){
       //@ts-ignore
      this.setRating(val.raiting.currentValue)
    }

  }
  setRating(val:any){
  //@ts-ignore
    document.querySelector('.raiting-active').style.width=+this.raiting*10+'%';
  }

 
}
