/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定 M×N 矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
 *
 * 示例:
 * 现有矩阵 matrix 如下：
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * 给定 target = 5，返回 true。
 * 给定 target = 20，返回 false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false

  let row = matrix.length - 1
  let col = 0

  while (col < matrix[0].length && row >= 0) {
    if (matrix[row][col] === target) return true
    if (matrix[row][col] < target) {
      col += 1
    } else {
      row -= 1
    }
  }
  return false
}
