/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * 1. Integers in each row are sorted in ascending from left to right.
 * 2. Integers in each column are sorted in ascending from top to bottom.
 *
 * Example:
 * Consider the following matrix:
 * [
 *    [1,   4,  7, 11, 15],
 *    [2,   5,  8, 12, 19],
 *    [3,   6,  9, 16, 22],
 *    [10, 13, 14, 17, 24],
 *    [18, 21, 23, 26, 30]
 * ]
 * Given target = 5, return true.
 * Given target = 20, return false.
 *
 * 已知矩阵的每一行，每一列都从小到大排列，求在这样的矩阵中搜索一个数字的方法
 */

/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*
* 暴力法
*/
var searchMatrix_1 = function(matrix, target) {
  let i = 0
  while (i < matrix.length && matrix[i][0] <= target) {
    if (matrix[i].slice(-1)[0] >= target) {
      if (new Set(matrix[i]).has(target)) return true
    }
    i += 1
  }
  return false
}

/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*
* 双指针
*/
var searchMatrix_2 = function(matrix, target) {
  let i = matrix.length - 1
  let j = 0

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i -= 1
    } else if (matrix[i][j] < target) {
      j += 1
    } else {
      return true
    }
  }
  return false
}
