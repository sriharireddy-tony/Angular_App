import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule,
    TableModule,
    OverlayPanelModule,
    SidebarModule
  ],
  exports: [
    InputTextModule,
    DropdownModule,
    CalendarModule,
    AutoCompleteModule,
    TableModule,
    OverlayPanelModule,
    SidebarModule
  ]
})
export class PrimengLibModule { }
