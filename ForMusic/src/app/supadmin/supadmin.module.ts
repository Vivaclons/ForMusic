import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupadminRoutingModule } from './supadmin-routing.module';
import { SadminComponent } from './sadmin/sadmin.component';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [SadminComponent, DialogboxComponent],
  imports: [
    CommonModule,
    SupadminRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class SupadminModule { }
