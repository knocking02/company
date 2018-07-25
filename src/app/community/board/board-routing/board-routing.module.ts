import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { BoardMainComponent } from '../board-main/board-main.component';
import { BoardListComponent } from '../board-list/board-list.component';
import { BoardViewComponent } from '../board-view/board-view.component';
import { BoardWriteComponent } from '../board-write/board-write.component';

const boardRoutes: Routes = [
  {
    path: 'community/board',
    component: BoardMainComponent,
    children: [
      {
        path: 'list',
        component: BoardListComponent
      },
      {
        path: 'view',
        component: BoardViewComponent
      },
      {
        path: 'write',
        component: BoardWriteComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(boardRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
