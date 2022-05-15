import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('openWindow', [
    state('initial', style({ width: 0 })),
    state('expanded', style({ width: 40 + '%' })),
    transition('initial <=> expanded', animate('0.5s')),
  ]),
  ],
})
export class AppComponent {
  title = 'modeList';
  listView = true;
  isExpanded = false;
  selecteditem: any;

  showWindow() {
    this.isExpanded = true;
  }

  hideWindow() {
    this.isExpanded = false;
  }

  showTile() {
    this.listView = false;

  }

  showList() {
    this.listView = true;
  }

  showItemDetails(event: any) {
    let obj = JSON.stringify(event)
    this.isExpanded = true;
    this.selecteditem = JSON.parse(obj);
    console.log(event);
  }

}
