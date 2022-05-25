import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  summary=true;
  iconColorAbout='#FF5D5D';
  iconColorPortfolio='rgb(121, 110, 110)';
  showPortfolio(){
    this.summary=!this.summary;
    if(this.iconColorAbout=='#FF5D5D'){
      this.iconColorAbout='rgb(121, 110, 110)';
      this.iconColorPortfolio='#FF5D5D';
    }
   else{
     this.iconColorAbout='#FF5D5D';
     this.iconColorPortfolio='rgb(121, 110, 110)';
   }
  }
}
