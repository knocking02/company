import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { BoardListComponent } from '../board-list/board-list.component';

const boardRoutes: Routes = [
  {path: 'list', component: BoardListComponent}
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
