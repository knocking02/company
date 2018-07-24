import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardListComponent } from './board-list/board-list.component';
import { BoardViewComponent } from './board-view/board-view.component';
//import { BoardRoutingModule } from './board-routing/board-routing.module';

@NgModule({
  imports: [
    CommonModule,
  //  BoardRoutingModule
  ],
  declarations: [BoardListComponent, BoardViewComponent]
})
export class BoardModule { }
