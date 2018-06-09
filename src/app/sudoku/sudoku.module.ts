import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Modules */
import { SharedModule } from '../shared/shared.module';

/* Custom Components */
import { SudokuContainerComponent } from '../sudoku-container/sudoku-container.component';
import { SudokuBoardComponent } from '../sudoku-board/sudoku-board.component';
import { SudokuService } from '../sudoku.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SudokuContainerComponent
  ],
  declarations: [
    SudokuContainerComponent,
    SudokuBoardComponent,
    
  ],
  providers: [SudokuService]
})
export class SudokuModule { }
