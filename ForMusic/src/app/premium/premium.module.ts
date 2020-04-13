import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumRoutingModule } from './premium-routing.module';
import {UserComponent} from './user/user.component';
import {ManicComponent} from './manic/manic.component';
import {FutureComponent} from './future/future.component';
import {ScaryComponent} from './scary/scary.component';
import {MemoriesComponent} from './memories/memories.component';
import {LoveComponent} from './love/love.component';
import {AdminComponent} from './admin/admin.component';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app.module';


@NgModule({
  declarations: [ UserComponent,
    ManicComponent,
    FutureComponent,
    ScaryComponent,
    MemoriesComponent,
    LoveComponent,
    AdminComponent,
    DialogboxComponent
  ],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class PremiumModule { }
