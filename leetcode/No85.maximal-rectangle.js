/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a 2D binary matrix filled with 0's and 1's,
 * find the largest rectangle containing only 1's and return its area.
 *
 * Example:
 * Given the following matrix:
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * Return 6.
 *
 * 求矩阵中全部元素都是 1 的最大矩形内元素个数。注：矩阵中的元素都是字符串
 */

var findRightBorder = function(arr, row, column, tmp) {
  var key = `${row}-${column}-right`;
  if (tmp[key] !== undefined) {
    return tmp[key];
  }
  var result = arr.length - 1;
  for (var i = column + 1; i < arr.length; i += 1) {
    if (arr[i] !== '1') {
      result = i - 1;
      break;
    }
  }
  tmp[key] = result;
  return result;
};

var findBottomBorder = function(matrix, row, column, tmp) {
  var key = `${row}-${column}-bottom`;
  if (tmp[key] !== undefined) {
    return tmp[key];
  }
  var result = matrix.length - 1;
  for (var i = row + 1; i < matrix.length; i += 1) {
    if (matrix[i][column] != '1') {
      result = i - 1;
      break;
    }
  }
  tmp[key] = result;
  return result;
};

/**
* @param {character[][]} matrix
* @return {number}
*/
var maximalRectangle = function(matrix) {
  var area = 0;
  var tmp = {};

  for (var r = 0; r < matrix.length; r += 1) {
    var row = matrix[r];
    for (var c = 0; c < row.length; c += 1) {
      if (row[c] === '1') {
        var bottomBorder = findBottomBorder(matrix, r, c, tmp);
        var rightBorder = findRightBorder(row, r, c, tmp);
        var maxArea = (rightBorder + 1 - c) * (bottomBorder + 1 - r);
        if ((rightBorder + 1 - c) > area) area = rightBorder + 1 - c;
        if (maxArea > area) {
          for (var i = r + 1; i <= bottomBorder; i += 1) {
            var border = findRightBorder(matrix[i], i, c, tmp);
            if (border < rightBorder) {
              rightBorder = border;
            }
            var validateArea = (rightBorder + 1 - c) * (i + 1 - r);
            if (validateArea > area) area = validateArea;
          }
        }
      }
    }
  }
  return area;
};
