import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {ProServiceService} from '../../pro-service.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogboxComponent} from '../dialogbox/dialogbox.component';
import {AuthService2Service} from '../../auth-service2.service';

@Component({
  selector: 'app-sadmin',
  templateUrl: './sadmin.component.html',
  styleUrls: ['./sadmin.component.css']
})
export class SadminComponent implements OnInit {
  dataTask = new MatTableDataSource();
  displayedColumns: st
  ring[] = ['id', 'Name', 'Surname', 'userName', 'password', 'nameRole', 'action'];
  filterAuth = '';
  filterName = '';
  formAuth: FormGroup;
  formName: FormGroup;
  roles = '';
  limit = 3;
  page = 0;

  constructor(private auth: AuthService2Service, private service: ProServiceService, private dialog: MatDialog, private formS: FormBuilder, private formI: FormBuilder, private formN: FormBuilder) {
    this.formAuth = this.formS.group({
      userName: ['']
    });

    this.formName = this.formI.group({
      Name: ['']
    });
  }

  ngOnInit(): void {
    this.getUser();
    this.getRoles();
  }

  setFilterAndSort() {
    let str = '_page=' + this.page + '&_limit=' + this.limit;
    if (this.filterAuth !== '' && this.filterAuth !== null && this.filterAuth !== 'none') {
      str += '&userName=' + this.filterAuth;
    }
    if (this.filterName !== '' && this.filterName !== null) {
      str += '&Name=' + this.filterName;
    }
    return str;
  }

  setFilterUsername() {
    this.filterAuth = this.formAuth.getRawValue().userName;
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }

  setFilterName() {
    this.filterName = this.formName.getRawValue().Name;
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }
  changeTableList(event) {
    this.limit = event.pageSize;
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }

  getUser() {
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }

  getRoles() {
    this.service.getAllRoles().subscribe(res => {
      this.roles = res;
    });
  }

  findRole(id: number) {
    for (let i = 0; i < this.roles.length; i++) {
      if (this.roles[i].id == id) {
        return this.roles[i].nameRole;
      }
    }
  }

  delete(id) {
    this.service.deleteUser(id).subscribe(res => {
      this.getUser();
    }, error => {
      console.error(error);
    });
  }

  // update
  update(task: any) {
    this.dialog.open(DialogboxComponent, {
      width: '450px',
      data: task
    }).afterClosed().subscribe(res => {
      this.service.updateUser(res).subscribe(result =>
        this.getUser());
    });
  }

  create() {
    this.dialog.open(DialogboxComponent, {
      width: '450px',
    }).afterClosed().subscribe( res => {
      this.service.createUser(res).subscribe( result => {
        this.getUser();
      });
    });
  }
  logout() {
    this.auth.logout();
  }
}
