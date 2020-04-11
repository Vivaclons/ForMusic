import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ManicComponent } from './manic/manic.component';
import { FutureComponent } from './future/future.component';
import { ScaryComponent } from './scary/scary.component';
import { MemoriesComponent } from './memories/memories.component';
import { LoveComponent } from './love/love.component';


@NgModule({
  declarations: [UserComponent, ManicComponent, FutureComponent, ScaryComponent, MemoriesComponent, LoveComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})

export class UserModule { }
