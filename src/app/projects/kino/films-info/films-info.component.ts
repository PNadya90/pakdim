import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-films-info',
  templateUrl: './films-info.component.html',
  styleUrls: ['./films-info.component.scss']
})

export class FilmsInfoComponent implements OnInit {

  @Input() item: any;
  idFilm: any;
  constructor() { }

  ngOnInit(): void {
  }
}
