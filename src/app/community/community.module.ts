import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardModule } from './board/board.module';
import { CommunityMainComponent } from './community-main/community-main.component';

import { CommunityRoutingModule } from './community-routing/community-routing.module';

@NgModule({
  imports: [
    CommonModule,  
    BoardModule,
    CommunityRoutingModule
  ],
  declarations: [CommunityMainComponent]
})
export class CommunityModule { }
