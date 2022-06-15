import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  summary = true;
  portfolio = false;
  iconColorAbout = '#FF5D5D';
  iconColorPortfolio = 'rgb(121, 110, 110)';
  toggle = false;
  display: string | undefined;
  showPortfolio() {
    this.summary = false;
    this.portfolio = true;
    this.iconColorAbout = 'rgb(121, 110, 110)';
    this.iconColorPortfolio = '#FF5D5D';
    if (this.toggle) {
      this.showMenu()
    }
  }

  showAbout() {
    this.summary = true;
    this.portfolio = false;
    this.iconColorAbout = '#FF5D5D';
    this.iconColorPortfolio = 'rgb(121, 110, 110)';
    if (this.toggle) {
      this.showMenu();
    }
    if (window.innerWidth < 700) {
      this.display = 'flex';
    }
  }
  showMenu() {
    this.toggle = !this.toggle;
  }

  showCV() {
    window.open('./assets/CV_Nadya.pdf', '_blank');
  }
}