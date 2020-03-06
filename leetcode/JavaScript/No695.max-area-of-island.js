/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 * Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
 *
 * Example 1:
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *  [0,1,0,0,1,1,0,0,1,0,1,0,0],
 *  [0,1,0,0,1,1,0,0,1,1,1,0,0],
 *  [0,0,0,0,0,0,0,0,0,0,1,0,0],
 *  [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 *
 * Example 2:
 * [[0,0,0,0,0,0,0,0]]
 * Given the above grid, return 0.
 *
 * Note: The length of each dimension in the given grid does not exceed 50.
 *
 * 给定一个包含了一些 0 和 1的非空二维数组 grid, 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0
  const ROW = grid.length
  if (!ROW) return max
  const COL = grid[0].length

  const dfs = (i, j) => {
    grid[i][j] = 2

    let count = 1
    for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
      if (grid[row][col] !== 1) continue
      count += dfs(row, col)
    }
    return count
  }

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      if ((COL - j) + (ROW - 1 - i) * COL <= max) return max
      if (grid[i][j] !== 1) continue
      max = Math.max(max, dfs(i, j))
    }
  }
  return max
}
