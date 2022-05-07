import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManegmentModulComponent } from './manegment-modul/manegment-modul.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { DataInfoService } from './data-info.service';

@NgModule({
  declarations: [
    AppComponent,
    ManegmentModulComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
