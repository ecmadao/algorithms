/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * Example:
 * Given the following matrix:
 * [
 *    [ 1, 2, 3 ],
 *    [ 4, 5, 6 ],
 *    [ 7, 8, 9 ]
 * ]
 * You should return [1,2,3,6,9,8,7,4,5].
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素
 */

/**
 * 思路：
 * 目前除了老老实实的按照旋转顺序遍历以外还没想出什么更好的方法
 * 不过我们可以来优化旋转遍历的代码
 * 右题意可知，按照从最外层顺时针旋转的顺序进行遍历，每次到达最底部，或者撞到已经遍历过的元素时，就重新改变方向
 * 所以其实每次遍历的方向是 右 -> 下 -> 左 -> 上，我们可以记录旋转的次数 loopCount ，通过 loopCount % 4 来方便的确认下一步的方向
 * 同时根据其是否到底部（或顶部）以及是否撞上已遍历的元素，来确定是否改变方向
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder_1 = function(matrix) {
  const result = []
  const ROW = matrix.length
  if (!ROW) return result
  const COLUMN = matrix[0].length

  const getNexts = [
    (i, j) => [i, j + 1],
    (i, j) => [i + 1, j],
    (i, j) => [i, j - 1],
    (i, j) => [i - 1, j]
  ]

  let i = 0
  let j = 0
  let index = 0
  while (i >= 0 && i < ROW && j >= 0 && j < COLUMN) {
    if (matrix[i][j] === null) break
    result.push(matrix[i][j])
    matrix[i][j] = null

    let next = getNexts[index % 4](i, j)
    if (next[0] < 0 || next[0] >= ROW || next[1] < 0 || next[1] >= COLUMN || matrix[next[0]][next[1]] === null) {
      index += 1
      next = getNexts[index % 4](i, j)
    }
    i = next[0]
    j = next[1]
  }

  return result
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * 按层模拟
 * 最外层所有元素按照顺时针顺序输出，其次是次外层，以此类推
 */
var spiralOrder_2 = function(matrix) {
  if (!matrix.length) return []
  let r1 = 0
  let r2 = matrix.length
  let c1 = 0
  let c2 = matrix[0].length
  const result = []

  while (r1 < r2 && c1 < c2) {
    for (let c = c1; c < c2; c += 1) result.push(matrix[r1][c])
    for (let r = r1 + 1; r < r2; r += 1) result.push(matrix[r][c2 - 1])
    if (r1 + 1 < r2 && c1 + 1 < c2) {
      for (let c = c2 - 2; c >= c1; c -= 1) result.push(matrix[r2 - 1][c])
      for (let r = r2 - 2; r > r1; r -= 1) result.push(matrix[r][c1])
    }
    r1 += 1
    r2 -= 1
    c1 += 1
    c2 -= 1
  }
  return result
}
