/**
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    
    Note:
    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.} board 
*/

const isValidSudoku = (board) => {
  let result = true;

  // Validate rows
  for (let i = 0; i < 9; i++) {
    let obj = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] in obj) {
        result = false;
        break;
      }
      if (board[i][j] !== ".") {
        obj[board[i][j]] = true;
      }
    }
  }

  // Validate col
  for (let i = 0; i < 9; i++) {
    let obj = {};
    let j = 0;
    while (j < 9) {
      if (board[j][i] in obj) {
        result = false;
        break;
      }
      if (board[j][i] !== ".") {
        obj[board[j][i]] = true;
      }
      j++;
    }
  }

  // Validate 3 * 3 
  for(let row = 0; row < 9; row += 3) {
    for(let col = 0; col < 9; col += 3) {
        let obj = {};
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                let cv = board[row + i][col + j]
                if(cv in obj) {
                    result = false;
                    break;
                }
                if (cv !== ".") {
                    obj[cv] = true;
                  }
            }
        }
    }
  }
  return result;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
