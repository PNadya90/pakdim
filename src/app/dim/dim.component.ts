import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dim',
  templateUrl: './dim.component.html',
  styleUrls: ['./dim.component.scss']
})
export class DimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  redirectTo(path:string){
    window.open(path,"_self");
  }
}
