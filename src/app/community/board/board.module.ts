import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardMainComponent } from './board-main/board-main.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardRoutingModule } from './board-routing/board-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule
  ],
  declarations: [BoardMainComponent, BoardListComponent]
})
export class BoardModule { }
