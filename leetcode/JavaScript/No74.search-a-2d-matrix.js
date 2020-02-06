/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * Example:
 * Consider the following matrix:
 * [
 *    [1,   3,  5,  7],
 *    [10, 11, 16, 20],
 *    [23, 30, 34, 50]
 * ]
 * Given target = 3, return true.
 *
 * 在一个顺序排列的矩阵中搜索。矩阵的每一行按照从小到大的顺序排列，且任意一行的最后一个数大于下一行的第一个数
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let i = 0
  let j = matrix.length - 1

  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    const row = matrix[mid]

    if (row[0] <= target) {
      if (row[row.length - 1] >= target) {
        i = mid
        break
      }
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  const row = matrix[i]
  return new Set(row).has(target)
}
