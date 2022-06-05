import { Component, OnInit } from '@angular/core';
import { clientInfo } from '../clientInfo.model';
import { Ta9Service } from '../ta9.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  client: clientInfo = {
    clientId: '',
    clientLocalTime: '',
    screenResolution: '',
    status: '',
    timeZone: '',
    ip: '',
  };
  id:any;
  localTime: any = Date.now();
  status = 'ONLINE';
  ip = '';
  screen = window.screen.width + 'x' + window.screen.height;
  timeZone: any = new Date().getTimezoneOffset() / 60 * (-1);
  interval: any;

  constructor(private appService: Ta9Service) { };

  ngOnInit() {

    if(localStorage['id']){
      this.id=localStorage['id']
    }
    else {
      this.id = uuidv4();
      localStorage.setItem('id',this.id)
    }
    
    this.appService.getIPAddress().subscribe((res: any) => {
      this.ip = res.ip;
      this.client.ip = this.ip;
      this.client.clientId = this.id;
      this.client.clientLocalTime = this.localTime;
      this.client.status = this.status;
      this.client.screenResolution = this.screen;
      this.client.timeZone = '+0' + this.timeZone + ':00';
      console.log(this.client);
      this.appService.postUserInfo(this.client).subscribe((res2) => { console.log(res2) });
      this.interval=setInterval(() => {
        this.appService.keepAlive(this.id).subscribe((res3) => {});
      },5000);
    })
  };
  ngOnDestroy(){
  clearInterval(this.interval)
  }
}



