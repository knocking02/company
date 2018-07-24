import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CommunityMainComponent } from '../community-main/community-main.component';
import { BoardListComponent } from '../board/board-list/board-list.component';
import { BoardViewComponent } from '../board/board-view/board-view.component';

const communityRoutes: Routes = [
  {
    path: 'community',
    component: CommunityMainComponent,
    children: [
      {
        path: 'list',
        component: BoardListComponent
      },
      {
        path: 'view',
        component: BoardViewComponent
      }
   ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(communityRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
