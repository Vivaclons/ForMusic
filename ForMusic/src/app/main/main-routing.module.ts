import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {UserComponent} from '../premium/user/user.component';
import {AuthGuService} from '../auth-gu.service';


const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: '', component: UserComponent, canActivate: [AuthGuService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
