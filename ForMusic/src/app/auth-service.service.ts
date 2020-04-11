import { Injectable } from '@angular/core';
import {ProServiceService} from './pro-service.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private users = [];
  private admin = [];
  private isAuthAd = false;
  private isAuth = false;
  constructor(private http: HttpClient, private service: ProServiceService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  login(userName, passWord) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName && this.users[i].password === passWord) {
        this.isAuth = true;
        localStorage.setItem('userName', this.users[i].userName);
      } else {
        alert('ERROR');
      }
    }
  }

  loginAdmin(userName, passWord) {
    for (let i = 0; i < this.admin.length; i++) {
      if (this.admin[i].AdminName === userName && this.admin[i].password === passWord) {
        this.isAuthAd = true;
        localStorage.setItem('AdminName', this.users[i].AdminName);
      } else {
        alert('ERROR');
      }
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('userName');
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('userName')) {
          this.isAuth = true;
        } else if (localStorage.getItem('AdminName')){
          this.isAuthAd = true;
        } else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
