import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taskName', 'status'];
  dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialogRef<LoveComponent>) { }

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
  { id: 1, taskName: 'How', status: '5:14' },
  { id: 2, taskName: 'Afraid', status: '4:11' },
  { id: 3, taskName: 'Everybody\'s Watching Me (Uh Oh)', status: '3:58' },
  { id: 4, taskName: 'Sweater Weather', status: '4:00' },
  { id: 5, taskName: 'let it Go', status: '3:17' },
  { id: 6, taskName: 'Alleyways', status: '4:27' },
  { id: 7, taskName: 'W.D.Y.W.F.M?', status: '4:19' },
  { id: 8, taskName: 'Flawless', status: '4:06' },

];
