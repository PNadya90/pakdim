import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutMeComponent } from "../about-me/about-me.component";
import { PortfolioComponent } from "../portfolio/portfolio.component"; 
import { HomeComponent } from "./home.component";




@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
