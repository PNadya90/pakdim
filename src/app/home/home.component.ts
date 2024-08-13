import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  key = 'aboutMe';
  private isScrolling: boolean = false;
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;

  @HostListener('window:scroll', []) onWindowScroll() {
    if (this.isScrolling) return;
    const aboutMe = this.aboutMe.nativeElement;
    const portfolio = this.portfolio.nativeElement;
    const scrollPosition = window.scrollY;
    if (portfolio !== null && scrollPosition >= portfolio.offsetTop - 50) {
      this.key = 'portfolio';
    } else if (aboutMe !== null && scrollPosition >= aboutMe.offsetTop - 50) {
      this.key = 'aboutMe';
    }
  }


  scrollTo(key: string) {
    this.isScrolling = true;
    if (key === 'portfolio') {
      this.portfolio.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.aboutMe.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    this.key = key;
    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }
  showCV() {
    window.open('./assets/NadyaPak_CV.pdf', '_blank');
  }
}