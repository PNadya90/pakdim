import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsDropdownComponent } from 'src/app/utils/cs-dropdown/cs-dropdown.component';
import { AddWindowComponent } from './add-window/add-window.component';
import { AppEventList } from './event-list.component';
import { InfoComponent } from './info/info.component';
import { ManegmentModulComponent } from './manegment-modul/manegment-modul.component';
import { TileViewComponent } from './tile-view/tile-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManegmentModulComponent,
    InfoComponent,
    AddWindowComponent,
    CsDropdownComponent,
    TileViewComponent,
    AppEventList,
  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule,
    FormsModule,   
  ]
})
export class EventListModule { }
