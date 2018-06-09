import { Injectable } from '@angular/core';

@Injectable()
export class SudokuService {

  constructor() { }

  cloneBoard = (board) => {
    return this.arrayClone(board);
  }

  maskBoard = (board, difficulty) => {
    return board;
  }

  getNewBoard = () => {
    return [
      [
        [
          [6, null, null],
          [null, 4, 8],
          [null, null, 9]
        ],
        [
          [4, null, 9],
          [7, null, null],
          [null, 2, null]
        ],
        [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ]
      ],
      [
        [
          [null, null, null],
          [null, null, null],
          [1, null, 6]
        ],
        [
          [null, null, null],
          [null, null, 1],
          [null, 7, null]
        ],
        [
          [3, 7, null],
          [5, 8, null],
          [null, 9, null]
        ]
      ],
      [
        [
          [null, null, null],
          [7, null, 1],
          [null, null, null]
        ],
        [
          [null, null, null],
          [3, null, null],
          [9, 1, 2]
        ],
        [
          [null, null, null],
          [null, 4, null],
          [null, null, null]
        ]
      ]
    ];
  }

  getSolBoard = () => {
    return [
      [
        [
          [6, 1, 7],
          [2, 4, 8],
          [5, 3, 9]
        ],
        [
          [4, 5, 9],
          [7, 3, 6],
          [1, 2, 8]
        ],
        [
          [8, 2, 3],
          [9, 1, 5],
          [4, 6, 7]
        ]
      ],
      [
        [
          [9, 8, 2],
          [3, 7, 4],
          [1, 5, 6]
        ],
        [
          [5, 6, 4],
          [2, 9, 1],
          [8, 7, 3]
        ],
        [
          [3, 7, 1],
          [5, 8, 6],
          [2, 9, 4]
        ]
      ],
      [
        [
          [8, 2, 3],
          [7, 9, 1],
          [4, 6, 5]
        ],
        [
          [6, 4, 7],
          [3, 8, 5],
          [9, 1, 2]
        ],
        [
          [1, 5, 9],
          [6, 4, 2],
          [7, 3, 8]
        ]
      ]
    ];
  }

  arrayClone = (array) => {
    let i, copy;

    if (Array.isArray(array)) {
      copy = array.slice(0);
      for ( i = 0; i < copy.length; i++ ) {
        copy[i] = this.arrayClone(copy[i]);
      }
      return copy;
    } else if (typeof(array) === 'object' && array !== null) {
      throw new Error('Cannot clone array containing an object!');
    } else {
      return array;
    }
  }
}
