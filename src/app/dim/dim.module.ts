import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimComponent } from './dim.component';
import { HeadComponent } from './head/head.component';
import { FaceComponent } from './face/face.component';


@NgModule({
  declarations: [
    DimComponent,
    HeadComponent,
    FaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DimModule { }
