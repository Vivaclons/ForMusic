import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProServiceService} from './pro-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService2Service {
  private admin = [];
  private isAuth = false;
  constructor(private http: HttpClient, private service: ProServiceService) {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this.service.getAllAdmin().subscribe(res => {
      this.admin = res;
    });
  }

  loginAdmin(userName, passWord) {
    for (let i = 0; i < this.admin.length; i++) {
      if (this.admin[i].adminName === userName && this.admin[i].password === passWord) {
        this.isAuth = true;
        localStorage.setItem('adminName', this.admin[i].adminName);
        alert('Success');
        break;
      } else {
        console.log(this.admin[i].adminName);
        continue;
      }
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('adminName');
  }

  isAuthenticated2(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('adminName')) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
