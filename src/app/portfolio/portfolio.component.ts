import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto(url:any, absolute?:boolean){
    if(absolute){
      window.window.location.href = url;
    }
    this.router.navigateByUrl(url);  
  }
}
