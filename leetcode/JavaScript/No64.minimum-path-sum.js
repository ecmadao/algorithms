/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note:
 * You can only move either down or right at any point in time.
 *
 * 在一个 m * n 的矩阵中，每个位置上都有一个数字。现从 (0, 0) 走到 (m - 1, n - 1)，即左上角到右下角，
 * 每次只能向右或向下走一步，经过的数字都会被累加起来，求累加的和的最小值
 */

/**
 * 思路：
 * 动态规划。
 * sum(m, n) = grid[m][n] + Math.min(sum(m - 1, n), sum(m, n - 1))
 * 注意处理边界问题
 */

var pathSum = function(temp, grid, x, y) {
  var key = 'x' + x + 'y' + y;
  if (temp[key] ) return temp[key];
  var result;
  if (x === 0 && y === 0) {
      result = grid[0][0];
  } else if (x === 0) {
      result = grid[0][y] + pathSum(temp, grid, x, y - 1);
  } else if (y === 0) {
      result = grid[x][0] + pathSum(temp, grid, x - 1, y);
  } else {
      result = grid[x][y] + Math.min(pathSum(temp, grid, x, y - 1), pathSum(temp, grid, x - 1, y));
  }
  temp[key] = result;
  return result;
};

/**
* @param {number[][]} grid
* @return {number}
*/
var minPathSum = function(grid) {
  var x = grid.length - 1;
  var y = grid[0].length - 1;
  var TEMP = {};

  var sum = pathSum(TEMP, grid, x, y);
  return sum;
};