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
 *
 * 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
 * 1. 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
 * 2. 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
 * 3. 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
 * 4. 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
 * 根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的
 */


const getRound = (i, j) =>
  [
    [i, j - 1],
    [i, j + 1],
    [i - 1, j],
    [i + 1, j],
    [i - 1, j - 1],
    [i + 1, j + 1],
    [i - 1, j + 1],
    [i + 1, j - 1]
  ]

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const ROW = board.length
  const COL = board[0].length

  const tmp = {}

  const checkStatus = (i, j) => {
    const count = getRound(i, j).reduce((num, [row, col]) => {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) return num
      if (Math.abs(board[row][col]) === 1) return num + 1
      return num
    }, 0)

    if (board[i][j] === 0 && count === 3) {
      if (!tmp[i]) tmp[i] = {}
      tmp[i][j] = 1
    } else if (board[i][j] === 1 && (count < 2 || count > 3)) {
      if (!tmp[i]) tmp[i] = {}
      tmp[i][j] = 0
    }
  }

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      checkStatus(i, j)
    }
  }

  for (const row of Object.keys(tmp)) {
    for (const col of Object.keys(tmp[row])) {
      board[parseInt(row)][parseInt(col)] = tmp[row][col]
    }
  }
}
