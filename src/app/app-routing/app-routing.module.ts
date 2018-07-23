import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { CommunityMainComponent } from '../community/community-main/community-main.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'community', component: CommunityMainComponent }
//  {path: 'community', loadChildren: '../community/community-routing/community-routing.module#CommunityRoutingModule'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
