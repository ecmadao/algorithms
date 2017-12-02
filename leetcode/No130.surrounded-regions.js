/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 *
 * Example:
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * After running your function, the board should be:
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const floodFill = (x, y) => {
    if (x >=0 && x < board.length && y >=0 && y < board[0].length && board[x][y] === 'O') {
      board[x][y] = '#';
      floodFill(x - 1, y);
      floodFill(x + 1, y);
      floodFill(x, y - 1);
      floodFill(x, y + 1);
    }
  };

  if (board && board.length && board[0].length) {
    // top and bottom
    for (let i = 0; i < board[0].length; i += 1) {
      floodFill(0, i);
      floodFill(board.length - 1, i);
    }

    // left and right
    for (let i = 1; i < board.length - 1; i += 1) {
      floodFill(i, 0);
      floodFill(i, board[0].length - 1);
    }

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        if (board[i][j] === 'O') {
          board[i][j] = 'X';
        }
        if (board[i][j] === '#') {
          board[i][j] = 'O';
        }
      }
    }
  }
};
