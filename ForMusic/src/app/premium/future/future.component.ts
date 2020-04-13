import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taskName', 'status'];
  dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialogRef<FutureComponent>) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

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
  { id: 1, taskName: 'Future Nostalgia', status: '3:04' },
  { id: 2, taskName: 'Don`t Start Now', status: '3:03' },
  { id: 3, taskName: 'Cool', status: '3:29' },
  { id: 4, taskName: 'Physical', status: '3:13'},
  { id: 5, taskName: 'Levitating', status: '3:23' },
  { id: 6, taskName: 'love Again', status: '4:18' },
  { id: 7, taskName: 'Break My Heart', status: '3:41' },
  { id: 8, taskName: 'Hallucinate', status: '3:28' },

];
