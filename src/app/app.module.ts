import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManegmentModulComponent } from './manegment-modul/manegment-modul.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { DataInfoService } from './data-info.service';
import { AddWindowComponent } from './add-window/add-window.component';
import { CsDropdownComponent } from './utils/cs-dropdown/cs-dropdown.component';
import { TileViewComponent } from './tile-view/tile-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppEventList} from './event-list/event-list.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ManegmentModulComponent,
    InfoComponent,
    AddWindowComponent,
    CsDropdownComponent,
    TileViewComponent,
    AppEventList,
    AboutMeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [DataInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
