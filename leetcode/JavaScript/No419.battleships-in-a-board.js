/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s.
 * You may assume the following rules:
 * 1. You receive a valid board, made of only battleships or empty slots.
 * 2. Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
 * 3. At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
 *
 * Example:
 * X..X
 * ...X
 * ...X
 * In the above board there are 2 battleships.
 *
 * Invalid Example:
 * ...X
 * XXXX
 * ...X
 * This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
 *
 * Follow up:
 * Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?
 *
 * 给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：
 * 1. 给你一个有效的甲板，仅由战舰或者空位组成。
 * 2. 战舰只能水平或者垂直放置。换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，其中N可以是任意大小。
 * 3. 两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0
  let i = 0
  while (i < board.length) {
    let j = 0

    while (j < board[i].length) {
      if (board[i][j - 1] === 'X') {
        j += 1
        continue
      }
      while (j < board[i].length && board[i][j] !== 'X') j += 1
      if (board[i][j] === 'X') {
        if (i - 1 < 0 || board[i - 1][j] !== 'X') count += 1
      }
      j += 1
    }
    i += 1
  }
  return count
}
