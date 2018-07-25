import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { BoardListComponent } from './board-list/board-list.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { BoardMainComponent } from './board-main/board-main.component';
import { BoardRoutingModule } from './board-routing/board-routing.module';
import { BoardWriteComponent } from './board-write/board-write.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    BoardRoutingModule
  ],
  declarations: [BoardListComponent, BoardViewComponent, BoardMainComponent, BoardWriteComponent]
})
export class BoardModule { }
