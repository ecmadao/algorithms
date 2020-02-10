/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an integer matrix, find the length of the longest increasing path.
 * From each cell, you can either move to four directions: left, right, up or down.
 * You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).
 *
 * Example 1:
 * Input: nums =
 * [
 *  [9,9,4],
 *  [6,6,8],
 *  [2,1,1]
 * ]
 * Output: 4
 * Explanation: The longest increasing path is [1, 2, 6, 9].
 *
 * Example 2:
 * Input: nums =
 * [
 *  [3,4,5],
 *  [3,2,6],
 *  [2,2,1]
 * ]
 * Output: 4
 * Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
 *
 * 给定一个整数矩阵，找出最长递增路径的长度。
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）
 */

class Graph {
  constructor(matrix) {
    this.matrix = matrix
    this.adj = {}
  }

  link(i, j, i1, j1) {
    if (this.matrix[i][j] >= this.matrix[i1][j1]) return
    if (!this.adj[`${i}-${j}`]) this.adj[`${i}-${j}`] = []
    if (!this.adj[`${i1}-${j1}`]) this.adj[`${i1}-${j1}`] = []
    this.adj[`${i}-${j}`].push(`${i1}-${j1}`)
  }

  dfs(point, marked, cache) {
    if (cache[point]) return cache[point]
    marked[point] = true

    let max = 0
    for (const p of this.adj[point]) {
      if (!marked[p]) {
        max = Math.max(max, this.dfs(p, marked, cache))
      }
    }
    marked[point] = false
    cache[point] = max + 1
    return max + 1
  }
}

/**
* @param {number[][]} matrix
* @return {number}
*/
var longestIncreasingPath = function(matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) return 1
  const graph = new Graph(matrix)

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (i > 0) graph.link(i, j, i - 1, j)
      if (i + 1 < matrix.length) graph.link(i, j, i + 1, j)
      if (j > 0) graph.link(i, j, i, j - 1)
      if (j + 1 < matrix[i].length) graph.link(i, j, i, j + 1)
    }
  }

  return Math.max(
    0,
    ...Object.keys(graph.adj).map(key => graph.dfs(key, {}, {}))
  )
}
