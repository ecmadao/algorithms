/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D grid consists of 0s (land) and 1s (water).
 * An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
 * Return the number of closed islands.
 *
 * Example 1:
 * Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
 * Output: 2
 * Explanation:
 * Islands in gray are closed because they are completely surrounded by water (group of 1s).
 *
 * Example 2:
 * Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
 * Output: 1
 *
 * Example 3:
 * Input: grid = [[1,1,1,1,1,1,1],
 *                [1,0,0,0,0,0,1],
 *                [1,0,1,1,1,0,1],
 *                [1,0,1,0,1,0,1],
 *                [1,0,1,1,1,0,1],
 *                [1,0,0,0,0,0,1],
 *                [1,1,1,1,1,1,1]]
 * Output: 2
 *
 * Constraints:
 * 1. 1 <= grid.length, grid[0].length <= 100
 * 2. 0 <= grid[i][j] <=1
 *
 * 有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
 * 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
 * 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
 * 请返回封闭岛屿的数目
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const ROW = grid.length
  const COL = grid[0].length

  // 0 - 陆地，1 - 水域
  const dfs = (i, j) => {
    grid[i][j] = 1

    let result = true // true 代表是封闭岛屿
    if (i === 0 || j === 0 || i === ROW - 1 || j === COL - 1) result = false

    for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
      if (grid[row][col] === 1) continue
      const res = dfs(row, col)
      result = result && res
    }
    return result
  }

  let result = 0
  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      if (grid[i][j] === 0 && dfs(i, j)) result += 1
    }
  }
  return result
}
