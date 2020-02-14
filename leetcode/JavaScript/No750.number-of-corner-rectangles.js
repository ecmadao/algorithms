/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a grid where each entry is only 0 or 1, find the number of corner rectangles.
 * A corner rectangle is 4 distinct 1s on the grid that form an axis-aligned rectangle.
 * Note that only the corners need to have the value 1. Also, all four 1s used must be distinct.
 *
 * Example 1:
 * Input: grid = [
 *  [1, 0, 0, 1, 0],
 *  [0, 0, 1, 0, 1],
 *  [0, 0, 0, 1, 0],
 *  [1, 0, 1, 0, 1]
 * ]
 * Output: 1
 * Explanation: There is only one corner rectangle, with corners grid[1][2], grid[1][4], grid[3][2], grid[3][4].
 *
 * Example 2:
 * Input: grid = [
 *  [1, 1, 1],
 *  [1, 1, 1],
 *  [1, 1, 1]
 * ]
 * Output: 9
 * Explanation: There are four 2x2 rectangles, four 2x3 and 3x2 rectangles, and one 3x3 rectangle.
 *
 * Example 3:
 * Input: grid = [
 *  [1, 1, 1, 1]
 * ]
 * Output: 0
 * Explanation: Rectangles must have four distinct corners.
 *
 * Note:
 * 1. The number of rows and columns of grid will each be in the range [1, 200].
 * 2. Each grid[i][j] will be either 0 or 1.
 * 3. The number of 1s in the grid will be at most 6000
 *
 * 给定一个只包含 0 和 1 的网格，找出其中角矩形的数量。
 * 一个 角矩形 是由四个不同的在网格上的 1 形成的轴对称的矩形。注意只有角的位置才需要为 1。并且，4 个 1 需要是不同的
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  if (grid.length <= 1) return 0

  const dp = []
  for (let i = 0; i < grid.length; i += 1) {
    dp[i] = []
    for (let j = 0; j < grid[i].length; j += 1) {
      dp[i][j] = (dp[i][j - 1] || 0) + (dp[i - 1] ? dp[i - 1][j] || 0 : 0) - (dp[i - 1] ? dp[i - 1][j - 1] || 0 : 0)
      if (grid[i][j] !== 1) continue

      let count = 0
      let col = j - 1
      while (col >= 0) {
        if (grid[i][col] === 1) {
          let row = i - 1
          while (row >= 0) {
            if (grid[row][j] === 1 && grid[row][col] === 1) {
              count += 1
            }
            row -= 1
          }
        }
        col -= 1
      }
      dp[i][j] += count
    }
  }
  return dp[grid.length - 1][grid[0].length - 1]
}
