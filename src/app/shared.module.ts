import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './Custom-Pipes/search-filter.pipe';
import { PrimengLibModule } from './Primeng/primeng-lib/primeng-lib.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    SearchFilterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFilterPipe,
    PrimengLibModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }
