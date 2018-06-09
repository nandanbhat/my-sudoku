/* Core Imports */
import { Component, OnInit } from '@angular/core';

/* Classes */
import { Game } from '../game';

@Component({
  selector: 'app-sudoku-container',
  templateUrl: './sudoku-container.component.html',
  styleUrls: ['./sudoku-container.component.scss']
})
export class SudokuContainerComponent implements OnInit {

  game: Game;


  constructor() {
    this.game = new Game();
  }

  ngOnInit() { }

  _reset = () => {
    this.game.reset();
  }

  _old = () => {
    this.game.modified();//need to implement correct logic
  }


}
