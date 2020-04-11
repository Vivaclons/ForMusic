import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService2Service} from './auth-service2.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGu2Service implements CanActivate{
  constructor(
    private router: Router,
    private authServiceService: AuthService2Service
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authServiceService.isAuthenticated2();
  }
}
