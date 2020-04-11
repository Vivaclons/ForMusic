import { Injectable } from '@angular/core';
import {ProServiceService} from './pro-service.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private users = [];
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
        alert('Success');
        break;
      } else {
        continue;
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
        } else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
