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
  if (!matrix.length || !matrix[0]) return false;
  var rowLength = matrix[0].length;
  var totalIndex = matrix.length * rowLength;
  var start = 1;
  var end = totalIndex;

  while (end >= start) {
    var mid = Math.ceil((start + end) / 2);
    var row = Math.floor(mid / rowLength);
    var remainder = mid % rowLength;
    var column = remainder - 1;
    if (remainder === 0) {
      row -= 1;
      column = rowLength - 1;
    }
    var num = matrix[row][column];
    if (num > target) {
      end = mid - 1;
    } else if (num < target) {
      start = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};