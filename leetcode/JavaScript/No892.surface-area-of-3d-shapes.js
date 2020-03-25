/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * On a N * N grid, we place some 1 * 1 * 1 cubes.
 * Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
 * Return the total surface area of the resulting shapes.
 *
 * Example 1:
 * Input: [[2]]
 * Output: 10
 *
 * Example 2:
 * Input: [[1,2],[3,4]]
 * Output: 34
 *
 * Example 3:
 * Input: [[1,0],[0,2]]
 * Output: 16
 *
 * Example 4:
 * Input: [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 32
 *
 * Example 5:
 * Input: [[2,2,2],[2,1,2],[2,2,2]]
 * Output: 46
 *
 * Note:
 * 1. 1 <= N <= 50
 * 2. 0 <= grid[i][j] <= 50
 *
 * 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。
 * 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
 * 请你返回最终形体的表面积
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let res = 0
  const N = grid.length
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (!grid[i][j]) continue
      res += grid[i][j] * 6 - ((grid[i][j] - 2) * 2 + 2)
      if (j + 1 < N && grid[i][j + 1]) {
        res -= Math.min(grid[i][j + 1],  grid[i][j]) * 2
      }
      if (i + 1 < N && grid[i + 1][j]) {
        res -= Math.min(grid[i + 1][j],  grid[i][j]) * 2
      }
    }
  }
  return res
}
