import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CommunityMainComponent } from '../community-main/community-main.component';
import { BoardModule } from '../board/board.module';

const communityRoutes: Routes = [
  {
    path: 'community',
    component: CommunityMainComponent,
    children: [
      {
        path: 'board',
        redirectTo: '/community/board',
        pathMatch: 'full'
      },
      {
        path: 'board',
        loadChildren: '../board/board.module#BoardModule'
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
