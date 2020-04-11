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
  // formName: FormGroup;
  //
  // sortName = '';

  limit = 3;
  page = 0;

  dataTask = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'createDate', 'importance', 'status'];

  constructor(private service: ProServiceService, private dialog: MatDialog, private formS: FormBuilder, private formI: FormBuilder, private formN: FormBuilder) {
    this.formAuth = this.formS.group({
      createDate: ['']
    });

    this.formName = this.formI.group({
      name: []
    });

    // this.formName = this.formN.group({
    //   name: ['']
    // });
  }

  ngOnInit(): void {
    this.getTask();
  }

  setFilterAndSort() {
    let str = '_page=' + this.page + '&_limit=' + this.limit;
    if (this.filterAuth !== '' && this.filterAuth !== null && this.filterAuth !== 'none') {
      str += '&createDate=' + this.filterAuth;
    }
    if (this.filterName !== '' && this.filterName !== null) {
      str += '&name=' + this.filterName;
    }
    return str;
  }

  setFilterAuthor() {
    this.filterAuth = this.formAuth.getRawValue().createDate;
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
  }

  adminLog() {
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
}

