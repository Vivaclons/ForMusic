import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuService} from './auth-gu.service';
import {AuthGu2Service} from './auth-gu2.service';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGu2Service]},
  {path: 'user', loadChildren: () => import('./premium/premium.module').then(m => m.PremiumModule), canActivate: [AuthGuService]},
  {path: 'supadmin', loadChildren: () => import('./supadmin/supadmin.module').then(m => m.SupadminModule), canActivate: [AuthGu2Service]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
