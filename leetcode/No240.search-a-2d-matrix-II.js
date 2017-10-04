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

var search = function(arr, target) {
  var start = 1;
  var end = arr.length;

  while (start <= end) {
    var mid = Math.ceil((start + end) / 2);
    var num = arr[mid - 1];
    if (num === target) return true;
    if (num < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0]) return false;
  var maxColumn = matrix[0].length;
  var result = false;

  for (var i = 0; i < matrix.length; i += 1) {
    var row = matrix[i];
    var startNum = row[0];
    var endNum = row[maxColumn - 1];

    if (startNum === target || endNum === target) {
      result = true;
      break;
    }
    if (startNum < target && endNum > target) {
      if (search(row, target)) {
        result = true;
        break;
      }
    } else if (startNum > target) {
      break;
    }
  }
  return result;
};
