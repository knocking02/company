import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Board } from '../model/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  displayedColumns: string[] = ['num', 'title', 'userName', 'regDate'];
  dataSource;
  boards: Board[];
  searchItems = [
    {value: '', viewValue: '전체'},
    {value: 'title', viewValue: '제목'},
    {value: 'userName', viewValue: '작성자'}
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private router: Router) {

    this.http.get<Board[]>('assets/data/board.json')
      .subscribe(res => {
        this.boards = res;
        this.dataSource = new MatTableDataSource<Board>(this.boards);
        this.dataSource.paginator = this.paginator;
      })
  }

  ngOnInit() {
  }

  rowSelect(row): void {
      console.log(row);
      this.router.navigateByUrl('/community/board/view');
  }

  writeForm(): void {
    this.router.navigateByUrl('/community/board/write');
  }

}
