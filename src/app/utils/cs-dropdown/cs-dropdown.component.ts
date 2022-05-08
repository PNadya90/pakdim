import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-dropdown',
  templateUrl: './cs-dropdown.component.html',
  styleUrls: ['./cs-dropdown.component.scss']
})
export class CsDropdownComponent implements OnInit {
  toggle = false;
  colors = [{ key: 1, value:'#000000'},
            { key: 2, value:'#696969'},
            { key: 3, value:'#C0C0C0'},
            { key: 4, value:'#DCDCDC'},
            { key: 5, value:'#FFFFFF'},

            { key: 6, value:'#AD0000'},
            { key: 7, value:'#A52A2A'},
            { key: 8, value:'#DC143C'},
            { key: 9, value:'#FF0000'},
            { key: 10, value:'#FF6347'},

            { key: 11, value:'#9400D3'},
            { key: 12, value:'#9932CC'},
            { key: 13, value:'#BA55D3'},
            { key: 14, value:'#9D59E0'},
            { key: 15, value:'#D8BFD8'},

            { key: 16, value:'#59e097'},
            { key: 17, value:'#68e3a2'},
            { key: 18, value:'#7ee7af'},
            { key: 19, value:'#93ebbc'},
            { key: 20, value:'#a9efca'},

            { key: 21, value:'#ffba00'},
            { key: 22, value:'#ffc21a'},
            { key: 23, value:'#ffc933'},
            { key: 24, value:'#ffcf4d'},
            { key: 25, value:'#ffd666'},

]
  constructor() { }

  ngOnInit(): void {
  }
  drop() {
    this.toggle = !this.toggle;

  }
}
