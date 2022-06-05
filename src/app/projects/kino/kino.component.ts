import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LoggBtnService } from './logg-btn.service';
@Component({
  selector: 'app-root',
  templateUrl: './kino.component.html',
  styleUrls: ['./kino.component.scss']
})

export class KinoComponent implements OnInit{

  id:any;

  constructor(public loggBtnService: LoggBtnService){}

  ngOnInit(): any {
    if (localStorage['id']) {
      this.id = localStorage['id']
    }
    else {
      this.id = uuidv4();
      localStorage.setItem('id', this.id)
    }
  }
  
  logoutUser(){
    this.loggBtnService.setLogIn(false);
    localStorage['userId']=null;
  }
}

