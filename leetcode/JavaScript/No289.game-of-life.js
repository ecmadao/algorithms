/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 * Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 * - Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 * - Any live cell with two or three live neighbors lives on to the next generation.
 * - Any live cell with more than three live neighbors dies, as if by over-population..
 * - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * Write a function to compute the next state (after one update) of the board given its current state.
 *
 * Follow up:
 * 1. Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
 * 2. In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const maxRowIndex = board.length - 1;
  const maxColunmIndex = board[0].length - 1;

  const round = (i, j) => {
    let count = 0;
    if (i > 0 && board[i - 1][j]) count += 1;
    if (i > 0 && j > 0 && board[i - 1][j - 1]) count += 1;
    if (i > 0 && j < maxColunmIndex && board[i - 1][j + 1]) count += 1;

    if (i < maxRowIndex && board[i + 1][j]) count += 1;
    if (i < maxRowIndex && j > 0 && board[i + 1][j - 1]) count += 1;
    if (i < maxRowIndex && j < maxColunmIndex && board[i + 1][j + 1]) count += 1;

    if (j > 0 && board[i][j - 1]) count += 1;
    if (j < maxColunmIndex && board[i][j + 1]) count += 1;

    return count;
  };

  const tmp = {};

  for (let i = 0; i <= maxRowIndex; i += 1) {
    for (let j = 0; j <= maxColunmIndex; j += 1) {
      const count = round(i, j);
      if (board[i][j]) {
        if (count !== 2 && count !== 3) {
          if (!tmp[i]) tmp[i] = {};
          tmp[i][j] = 0;
        }
      } else if (count === 3) {
        if (!tmp[i]) tmp[i] = {};
        tmp[i][j] = 1;
      }
    }
  }

  for (const row of Object.keys(tmp)) {
    for (const col of Object.keys(tmp[row])) {
      board[Number(row)][Number(col)] = tmp[row][col];
    }
  }
};
