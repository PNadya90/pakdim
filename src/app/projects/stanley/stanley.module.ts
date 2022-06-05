import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StanleyComponent } from './stanley.component';



@NgModule({
  declarations: [StanleyComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class StanleyModule { }
