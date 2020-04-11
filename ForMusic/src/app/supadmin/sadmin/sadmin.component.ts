import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {ProServiceService} from '../../pro-service.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogBox2Component} from '../../admin/dialog-box2/dialog-box2.component';
import {DialogboxComponent} from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-sadmin',
  templateUrl: './sadmin.component.html',
  styleUrls: ['./sadmin.component.css']
})
export class SadminComponent implements OnInit {

  filterAuth = '';
  filterName = '';

  formAuth: FormGroup;
  formName: FormGroup;
  limit = 3;
  page = 0;

  dataTask = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'createDate', 'importance', 'status', 'action'];

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

  delete(id) {
    this.service.deleteTask(id).subscribe(res => {
      this.getTask();
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
      this.service.updateTask(res).subscribe(result =>
        this.getTask());
    });
  }

  // create
  create() {
    this.dialog.open(DialogboxComponent, {
      width: '450px',
    }).afterClosed().subscribe( res => {
      this.service.createTask(res).subscribe( result => {
        this.getTask();
      });
    });
  }

}
