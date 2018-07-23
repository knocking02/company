import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


import { BoardModule } from './board/board.module';
import { CommunityMainComponent } from './community-main/community-main.component';

import { CommunityRoutingModule } from './community-routing/community-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    BoardModule,
    CommunityRoutingModule
  ],
  declarations: [CommunityMainComponent]
})
export class CommunityModule { }
