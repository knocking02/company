import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CommunityMainComponent } from '../community-main/community-main.component';
import { BoardMainComponent } from '../board/board-main/board-main.component';

const routes: Routes = [
  {
    path: 'community',
    component: CommunityMainComponent,
    children: [
      {path: 'board', component: BoardMainComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
