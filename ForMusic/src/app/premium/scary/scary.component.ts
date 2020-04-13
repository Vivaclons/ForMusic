import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-scary',
  templateUrl: './scary.component.html',
  styleUrls: ['./scary.component.css']
})
export class ScaryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taskName', 'status'];
  dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialogRef<ScaryComponent>) { }
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
  { id: 1, taskName: 'Scary Nights', status: '3:57' },
  { id: 2, taskName: 'I Wanna Rock (feat. Gunna)', status: '2:43' },
  { id: 3, taskName: 'Full Time Cappers (feat. Moneybagg YO)', status: '3:51' },
  { id: 4, taskName: 'Big Ben (feat. Preme)', status: '3:06' },
  { id: 5, taskName: 'K I D S (feat. Dex Lauper)', status: '2:48' },
  { id: 6, taskName: 'Hittin Licks', status: '2:34' },
  { id: 7, taskName: 'Demons & Angels (feat. Miguel & The Game)', status: '4:14' },
  { id: 8, taskName: 'A Very Strange Time', status: '3:39' },

];
