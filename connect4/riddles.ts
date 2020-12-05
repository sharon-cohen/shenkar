import {Riddle, RiddlesLevel} from '../common/common';
import {Board, IState} from './gameLogic';

// The riddle data in TicTacToe just includes the hint,
// which is where to show the "line" hint: either on a row / col / diagonal.
// E.g., "r1" is:
// ['X', 'X', 'X'],
// ['', '', ''],
// ['', '', ''],
// And "d1" is:
// ['X', '', ''],
// ['', 'X', ''],
// ['', '', 'X'],
export type RiddleData = 'E' | 'M' | 'H';

function r(riddleData: RiddleData, board: Board): Riddle<IState, RiddleData> {
  return {
    state: {
      board: board,
    },
    riddleData: riddleData,
  };
}

export const riddleLevels: RiddlesLevel<IState, RiddleData>[] = [
  {
    levelLocalizeId: 'CONNECT4_LEVEL1',
    difficulty: 'EASY',
    maxMovesNum: 1,
    turnIndex: 0,
    riddles: [
      r('E', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['Y', 'Y', 'Y', ' ', ' ', ' ', ' '],
      ]),
      r('E', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'Y', 'Y', 'Y'],
      ]),
      r('E', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'Y', 'Y', 'Y', 'R', ' '],
      ]),
    ],
  },
  {
    levelLocalizeId: 'CONNECT4_LEVEL2',
    difficulty: 'MEDIUM',
    maxMovesNum: 1,
    turnIndex: 0,
    riddles: [
      r('M', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['Y', 'Y', 'Y', ' ', ' ', ' ', ' '],
      ]),
      r('M', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'Y', 'Y', 'Y', 'R', ' '],
      ]),
      r('M', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', 'R', ' '],
        [' ', ' ', ' ', 'R', 'Y', 'R', ' '],
        [' ', ' ', ' ', 'Y', 'R', 'Y', 'R'],
        [' ', ' ', ' ', 'R', 'Y', 'Y', 'Y'],
      ]),
      r('M', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['Y', 'Y', ' ', 'Y', 'R', 'R', ' '],
        ['R', 'R', 'Y', 'Y', 'Y', 'R', ' '],
      ]),
    ],
  },
  {
    levelLocalizeId: 'CONNECT4_LEVEL3',
    difficulty: 'MEDIUM',
    maxMovesNum: 4,
    turnIndex: 0,
    riddles: [
      r('H', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'R', ' ', ' '],
        [' ', ' ', ' ', 'Y', 'R', ' ', ' '],
        [' ', ' ', ' ', 'Y', 'Y', ' ', ' '],
        [' ', ' ', ' ', 'R', 'Y', 'R', ' '],
        [' ', ' ', ' ', 'Y', 'R', 'R', ' '],
      ]),
      r('H', [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'R', ' ', ' ', ' ', ' '],
        [' ', ' ', 'R', 'Y', ' ', ' ', ' '],
        [' ', ' ', 'Y', 'Y', ' ', ' ', ' '],
        [' ', 'R', 'Y', 'R', ' ', ' ', ' '],
        [' ', 'R', 'R', 'Y', ' ', ' ', ' '],
      ]),
      r('H', [
        [' ', ' ', ' ', ' ', ' ', ' ', 'Y'],
        [' ', ' ', ' ', ' ', ' ', ' ', 'R'],
        [' ', ' ', 'R', 'R', ' ', ' ', 'Y'],
        [' ', ' ', 'Y', 'Y', ' ', ' ', 'R'],
        [' ', ' ', 'Y', 'R', ' ', 'R', 'Y'],
        [' ', ' ', 'R', 'Y', ' ', 'Y', 'R'],
      ]),
    ],
  },
];
