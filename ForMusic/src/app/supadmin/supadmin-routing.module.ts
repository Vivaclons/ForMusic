import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SadminComponent} from './sadmin/sadmin.component';


const routes: Routes = [
  {path: '', component: SadminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupadminRoutingModule { }
