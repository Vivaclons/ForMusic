import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupadminRoutingModule } from './supadmin-routing.module';
import { SadminComponent } from './sadmin/sadmin.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [SadminComponent, DialogboxComponent],
  imports: [
    CommonModule,
    SupadminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SupadminModule { }
