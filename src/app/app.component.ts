import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  summary=true;
  portfolio=false;
  iconColorAbout='#FF5D5D';
  iconColorPortfolio='rgb(121, 110, 110)';

  showPortfolio(){
    this.summary=false;
    this.portfolio=true;
    this.iconColorAbout='rgb(121, 110, 110)';
    this.iconColorPortfolio='#FF5D5D';
    
  }
  
  showAbout(){
    this.summary=true;
    this.portfolio=false;
    this.iconColorAbout='#FF5D5D';
    this.iconColorPortfolio='rgb(121, 110, 110)';
  }
}
