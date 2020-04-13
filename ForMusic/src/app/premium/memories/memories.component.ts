import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taskName', 'status'];
  dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialogRef<MemoriesComponent>) { }

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
  { id: 1, taskName: 'The One', status: '2:58' },
  { id: 2, taskName: 'Break Up Every Night', status: '3:28' },
  { id: 3, taskName: 'Bloodstream', status: '3:44' },
  { id: 4, taskName: 'Don`t Say (feat. Emily Warren)', status: '3:48' },
  { id: 5, taskName: 'My Type (feat. Emily Warren)', status: '3:37' },
  { id: 6, taskName: 'It Won`t Kill Ya (feat. Louane)', status: '3:37' },
  { id: 7, taskName: 'Something Just Like This (feat. Coldplay)', status: '4:07' },
  { id: 8, taskName: 'Paris', status: '3:41' },

];
