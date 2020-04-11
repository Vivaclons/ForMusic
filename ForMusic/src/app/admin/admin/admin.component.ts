import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProServiceService} from '../../pro-service.service';
import {DialogBox2Component} from '../dialog-box2/dialog-box2.component';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {AuthServiceService} from '../../auth-service.service';
import {AuthService2Service} from '../../auth-service2.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  filterAuth = '';
  filterName = '';

  formAuth: FormGroup;
  formName: FormGroup;
  limit = 3;
  page = 0;

  dataTask = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'Author', 'Year', 'min', 'action'];

  constructor(private auth: AuthService2Service, private service: ProServiceService, private dialog: MatDialog, private formS: FormBuilder, private formI: FormBuilder, private formN: FormBuilder) {
    this.formAuth = this.formS.group({
      Author: ['']
    });

    this.formName = this.formI.group({
      name: []
    });
  }

  ngOnInit(): void {
    this.getTask();
  }

  setFilterAndSort() {
    let str = '_page=' + this.page + '&_limit=' + this.limit;
    if (this.filterAuth !== '' && this.filterAuth !== null && this.filterAuth !== 'none') {
      str += '&Author=' + this.filterAuth;
    }
    if (this.filterName !== '' && this.filterName !== null) {
      str += '&name=' + this.filterName;
    }
    return str;
  }

  setFilterAuthor() {
    this.filterAuth = this.formAuth.getRawValue().Author;
    this.service.getAllTasks(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }

  setFilterName() {
    this.filterName = this.formName.getRawValue().name;
    this.service.getAllTasks(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }
  changeTableList(event) {
    this.limit = event.pageSize;
    this.service.getAllTasks(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }

  getTask() {
    this.service.getAllTasks(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }

  delete(id) {
    this.service.deleteTask(id).subscribe(res => {
      this.getTask();
    }, error => {
      console.error(error);
    });
  }

  // update
  update(task: any) {
    this.dialog.open(DialogBox2Component, {
      width: '450px',
      data: task
    }).afterClosed().subscribe(res => {
      this.service.updateTask(res).subscribe(result =>
        this.getTask());
    });
  }

  // create
  create() {
    this.dialog.open(DialogBox2Component, {
      width: '450px',
    }).afterClosed().subscribe( res => {
      this.service.createTask(res).subscribe( result => {
        this.getTask();
      });
    });
  }

  logout() {
    this.auth.logout();
  }
}
