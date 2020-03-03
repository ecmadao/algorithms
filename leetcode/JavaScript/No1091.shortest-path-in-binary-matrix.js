/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In an N by N square grid, each cell is either empty (0) or blocked (1).
 * A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:
 * 1. Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
 * 2. C_1 is at location (0, 0) (ie. has value grid[0][0])
 * 3. C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
 * 4. If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
 * Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.
 *
 * Example 1:
 * Input: [[0,1],[1,0]]
 * Output: 2
 *
 * Example 2:
 * Input: [[0,0,0],[1,1,0],[1,1,0]]
 * Output: 4
 *
 * Note:
 * 1. 1 <= grid.length == grid[0].length <= 100
 * 2. grid[r][c] is 0 or 1
 *
 * 在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。
 * 一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：
 * 1. 相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
 * 2. C_1 位于 (0, 0)（即，值为 grid[0][0]）
 * 3. C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
 * 4. 如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
 * 返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1
 */


const getPoints = (i, j) => {
  return [
    [i, j + 1],
    [i + 1, j],
    [i + 1, j + 1],
    [i + 1, j - 1],
    [i - 1, j + 1],
    [i - 1, j],
    [i, j - 1],
    [i - 1, j - 1]
  ]
}
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * 广度优先搜索
 */
var shortestPathBinaryMatrix = function(grid) {
  if (!grid.length || !grid[0].length) return -1
  const N = grid.length
  if (grid[0][0] === 1 || grid[N - 1][N - 1] === 1) return -1

  const queue = [[0, 0, 1]]

  grid[0][0] = 1
  while (queue.length) {
    const [i, j, step] = queue.shift()

    if (i === N - 1 && j === N - 1) return step

    for (const [row, col] of getPoints(i, j)) {
      if (row < 0 || col < 0 || row >= N || col >= N) continue
      if (grid[row][col] === 1) continue
      grid[row][col] = 1

      queue.push([row, col, step + 1])
    }
  }

  return -1
}
