import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { KinoComponent } from './kino.component';
import { FilmService } from './film.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { UserAccountComponent } from './userAccount/userAccount.component';
import { FilmsInfoComponent } from './films-info/films-info.component';
import { FilmDescriptionComponent } from './film-description/film-description.component';
import { RaitingComponent } from './raiting/raiting.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    KinoComponent,
    LoginComponent,
    HomePageComponent,
    UserAccountComponent,
    NewUserComponent,
    FilmsInfoComponent,
    FilmDescriptionComponent,
    RaitingComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FilmService,
  {provide:HTTP_INTERCEPTORS, 
    useClass:MyHttpInterceptor,
    multi:true,}]
})
export class KinoModule { }
