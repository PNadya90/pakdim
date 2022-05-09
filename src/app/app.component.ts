import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('openWindow', [
    state('initial', style({ width: 0 })),
    state('expanded', style({ width: 40 +'%'})),
    transition('initial <=> expanded', animate('0.5s')),
  ]),
],
})
export class AppComponent {
  title = 'modeList';
  width = 0;

  isExpanded=false;

  showWindow(){
    this.isExpanded=true;
  }

  hideWindow(){
    this.isExpanded=false;
  }
}
