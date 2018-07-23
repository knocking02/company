import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { BoardMainComponent } from '../board-main/board-main.component';
import { BoardListComponent } from '../board-list/board-list.component';

const routes: Routes = [
  {
    path: 'community/board',
    component: BoardMainComponent,
    children: [
      {path: 'list', component: BoardListComponent}
    ]

  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
