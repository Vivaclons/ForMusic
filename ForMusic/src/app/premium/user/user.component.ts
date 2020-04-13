import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {ManicComponent} from '../manic/manic.component';
import {FutureComponent} from '../future/future.component';
import {LoveComponent} from '../love/love.component';
import {MemoriesComponent} from '../memories/memories.component';
import {ScaryComponent} from '../scary/scary.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProServiceService} from '../../pro-service.service';
import {AdminComponent} from '../../main/admin/admin.component';
import {AuthServiceService} from '../../auth-service.service';
import {DialogboxComponent} from '../dialogbox/dialogbox.component';
import {AuthService2Service} from '../../auth-service2.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  filterAuth = '';
  filterName = '';

  formAuth: FormGroup;
  formName: FormGroup;

  limit = 3;
  page = 0;

  dataTask = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'Author', 'Year', 'min'];

  constructor(private auth2: AuthService2Service, private auth: AuthServiceService, private service: ProServiceService, private dialog: MatDialog, private formS: FormBuilder, private formI: FormBuilder, private formN: FormBuilder) {
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

  logout() {
    this.auth.logout();
  }

  adminLog() {
    this.dialog.open(AdminComponent, {
      width: '500px'
    });
  }

  manic() {
    this.dialog.open(ManicComponent, {
      width: '1000px'
    });
  }

  future() {
    this.dialog.open(FutureComponent, {
      width: '1000px'
    });
  }

  love() {
    this.dialog.open(LoveComponent, {
      width: '1000px'
    });
  }

  memories() {
    this.dialog.open(MemoriesComponent, {
      width: '1000px'
    });
  }

  scary() {
    this.dialog.open(ScaryComponent, {
      width: '1000px'
    });
  }
  getUser() {
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }
  creat(task: any) {
    this.dialog.open(DialogboxComponent, {
      width: '450px',
      data: task
    }).afterClosed().subscribe(res => {
      this.service.updateUser(res).subscribe(result =>
        this.getUser());
    });
  }
  error2() {
    this.auth2.check();
  }
}

