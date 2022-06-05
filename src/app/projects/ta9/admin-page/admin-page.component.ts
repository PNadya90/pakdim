import { Component, OnInit } from '@angular/core';
import { Ta9Service } from '../ta9.service';
import { MyType } from './myType.model';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  message: string | undefined = "";
  clientInfo: any;
  constructor(private appService: Ta9Service) { }

  ngOnInit() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 5000);
  };

  getData() {
    this.appService.getMessage().subscribe((msg: any) => {
      this.message = '';
      msg.messages?.forEach((el:any) => {
        this.message += el + "\n";
      });
    });
    this.appService.getClientInfo().subscribe((info) => {
      this.clientInfo = info;
      console.log(this.clientInfo)
    })
  }

}
