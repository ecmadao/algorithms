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
 * 按照螺旋的顺序旋转数组
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
var spiralOrder = function(matrix) {
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
