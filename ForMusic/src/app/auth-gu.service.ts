import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuService implements CanActivate {
  constructor(
    private router: Router,
    private authServiceService: AuthServiceService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authServiceService.isAuthenticated();
  }
}
