/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
 * The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
 * Note: You can only put the bomb at an empty cell.
 *
 * Example:
 * Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
 * Output: 3
 * Explanation: For the given grid,
 * 0 E 0 0
 * E 0 W E
 * 0 E 0 0
 * Placing a bomb at (1,1) kills 3 enemies
 *
 * 炸弹人：
 * 1. 'W' 表示一堵墙
 * 2. 'E' 表示一个敌人
 * 3. '0'（数字 0）表示一个空位
 *
 * 请你计算一个炸弹最多能炸多少敌人。
 * 1. 炸弹只能放在空位（0 位）
 * 2. 炸弹可以炸一整排和一整列
 * 3. 炸弹不能穿过墙体
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  let result = 0

  const dp = []
  for (let i = 0; i < grid.length; i += 1) {
    dp[i] = []
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 'W') {
        dp[i][j] = {
          col: 0,
          row: 0
        }
        continue
      }
      let row = grid[i][j] === 'E' ? 1 : 0
      let col = grid[i][j] === 'E' ? 1 : 0
      if (dp[i - 1] && dp[i - 1][j].col !== 0) {
        col = dp[i - 1][j].col
      } else {
        let index = i + 1
        while (index < grid.length && grid[index][j] !== 'W') {
          if (grid[index][j] === 'E') col += 1
          index += 1
        }
      }

      if (dp[i][j - 1] && dp[i][j - 1].row !== 0) {
        row = dp[i][j - 1].row
      } else {
        let index = j + 1
        while (index < grid[i].length && grid[i][index] !== 'W') {
          if (grid[i][index] === 'E') row += 1
          index += 1
        }
      }

      dp[i][j] = {
        row,
        col
      }
      if (grid[i][j] === '0') {
        result = Math.max(result, row + col)
      }
    }
  }

  return result
}
