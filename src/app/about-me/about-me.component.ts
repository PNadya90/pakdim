import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  smallImages = ['assets/about-me-imgs/angular.png',
    'assets/about-me-imgs/react.png', 'assets/about-me-imgs/js.svg',
    'assets/about-me-imgs/ts.svg', 'assets/about-me-imgs/rxjs.svg',
    'assets/about-me-imgs/scss.svg', 'assets/about-me-imgs/github.png',
    'assets/about-me-imgs/html-5.svg',
    'assets/about-me-imgs/redux.png'
  ]

  radius: number;
  angleStep: number;

  constructor() {
    this.radius = 0;
    this.angleStep = (2 * Math.PI) / this.smallImages.length;
  }

  
  @HostListener('window:resize')
  onResize() {
    this.radius = document.querySelector('.orbit')?.clientWidth! / 2;
  }

  getImageStyle(index: number) {
    if (!this.radius) {
      this.radius = document.querySelector('.orbit')?.clientWidth! / 2;
    }
    const angle = index * this.angleStep;
    const x = this.radius * Math.cos(angle) + this.radius - 24;
    const y = this.radius * Math.sin(angle) + this.radius - 24;

    return {
      left: `${x}px`,
      top: `${y}px`,
    };
  }


}
