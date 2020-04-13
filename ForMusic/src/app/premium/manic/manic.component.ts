import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-manic',
  templateUrl: './manic.component.html',
  styleUrls: ['./manic.component.css']
})
export class ManicComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taskName', 'status'];
  dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA);
  // str = 'en';
  // manic = 'manic';
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialogRef<ManicComponent>) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  // tra() {
  //   if (this.str === 'ru') {
  //     this.str = 'en';
  //   } else {
  //     this.str = 'ru';
  //   }
  // }
  back() {
    this.dialog.close();
  }
}
export interface Tasks {
  id: number;
  taskName: string;
  status: string;
}

const ELEMENT_DATA: Tasks[] = [
  { id: 1, taskName: 'Ashley', status: '3:06' },
  { id: 2, taskName: 'Clementine', status: '3:54' },
  { id: 3, taskName: 'Graveyard', status: '3:01' },
  { id: 4, taskName: 'You should be sad', status: '3:25' },
  { id: 5, taskName: 'Forever... (is a long time)', status: '2:47' },
  { id: 6, taskName: '3am', status: '3:54' },
  { id: 7, taskName: 'Without me', status: '3:21' },
  { id: 8, taskName: '929', status: '2:54' },

];
