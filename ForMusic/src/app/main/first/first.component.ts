import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {ProServiceService} from '../../pro-service.service';
import {SignupComponent} from '../signup/signup.component';
import { AdminComponent } from '../admin/admin.component';
import {AuthServiceService} from '../../auth-service.service';
import {AuthService2Service} from '../../auth-service2.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private dialog: MatDialog, private service: ProServiceService, private auth: AuthServiceService, private auth2: AuthService2Service) {}

  ngOnInit(): void {
    this.getUsers();
  }

  login() {
      this.dialog.open(LoginComponent, {
        width: '500px'
      });
  }

  adminLog() {
    this.dialog.open(AdminComponent, {
      width: '500px'
    });
  }

  getUsers() {
    this.service.getAllUsers().subscribe(res => {
    });
  }

  signup() {
    this.dialog.open(SignupComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this.service.createUser(res).subscribe(result => {
        this.getUsers();
      });
    });
  }

  admin() {
    this.dialog.open(AdminComponent, {
      width: '500px'
    });
  }

  error() {
    this.auth.check();
  }

  error2() {
    this.auth2.check();
  }
}
