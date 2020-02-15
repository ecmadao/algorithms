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
var maximalRectangle_1 = function(matrix) {
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


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle_2 = function(matrix) {
  const dp = []
  let result = 0

  for (let i = 0; i < matrix.length; i += 1) {
    dp[i] = []
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === '0') {
        dp[i][j] = { left: 0, top: 0 }
        continue
      }

      if (i === 0 || j === 0) {
        dp[i][j] = {
          left: (j - 1 >= 0 ? dp[i][j - 1].left : 0) + 1,
          top: (i - 1 >= 0 ? dp[i - 1][j].top : 0) + 1
        }
        result = Math.max(
          result,
          dp[i][j].left,
          dp[i][j].top
        )
        continue
      }

      if (dp[i][j - 1].left === 0 || dp[i - 1][j].top === 0) {
        result = Math.max(
          result,
          Math.max(dp[i][j - 1].left, dp[i - 1][j].top) + 1
        )
      } else {
        let J = j - 1
        let height = dp[i - 1][j].top + 1
        while (J > j - dp[i - 1][j].left && dp[i][J].left && dp[i][J].top) {
          height = Math.min(height, dp[i][J].top)
          J -= 1
        }

        let I = i - 1
        let width = dp[i][j - 1].left + 1
        while (I > i - dp[i][j - 1].top && dp[I][j].left && dp[I][j].top) {
          width = Math.min(width, dp[I][j].left)
          I -= 1
        }

        result = Math.max(
          result,
          height * (j - J),
          width * (i - I)
        )
      }

      dp[i][j] = {
        left: dp[i][j - 1].left + 1,
        top: dp[i - 1][j].top + 1
      }
    }
  }

  return result
}
