import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  summary = true;
  portfolio = false;
  iconColorAbout = 'rgb(119 56 206)';
  iconColorPortfolio = 'rgb(121, 110, 110)';
  toggle = false;
  display: string | undefined;
  neon:string | undefined;
  showPortfolio() {
    this.summary = false;
    this.portfolio = true;
    this.iconColorAbout = 'rgb(121, 110, 110)';
    this.iconColorPortfolio = 'rgb(119 56 206)';
    if (this.toggle) {
      this.showMenu()
    }
  }

  showAbout() {
    this.summary = true;
    this.portfolio = false;
    this.iconColorAbout = 'rgb(119 56 206)';
    this.iconColorPortfolio = 'rgb(121, 110, 110)';
    if (this.toggle) {
      this.showMenu();
    }
  }
  showMenu() {
    this.toggle = !this.toggle;
  }

  showCV() {
    window.open('./assets/Nadya_CV.pdf', '_blank');
  }
}