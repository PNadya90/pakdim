import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimComponent } from './dim.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    DimComponent,
    HeadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DimModule { }
