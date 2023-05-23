import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    InputTextModule,
    DropdownModule,
    CalendarModule,
  ]
})
export class PrimengLibModule { }
