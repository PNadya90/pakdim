import { NgModule } from '@angular/core'; 
import { Ta9Component } from './ta9.component'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatExpansionModule} from '@angular/material/expansion';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    Ta9Component,
    UserPageComponent,
    AdminPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ]
})
export class Ta9Module { }
