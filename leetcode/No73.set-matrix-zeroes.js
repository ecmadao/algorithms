/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 *
 * Note:
 * Did you use extra space?
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 *
 * 如果矩阵内有元素为 0，则把该元素所处的行和列全部设置为 0。不能使用额外的空间
 */

/**
 * LeetCode 又操蛋了。在 JS 环境下原地修改矩阵无效，始终无法改变某个位置上引用的值。而在 playground 环境下则一切正常
 * 因此，下面的代码可以正常运行并测试无误，但提交则会失败！
 */

/**
 * 思路：
 * 该题需要注意一点：
 * 把 0 元素所处的行、列设置为 0 之后，不要影响到后续的判断
 * 因此，需要把 0 的标记放在已经遍历过的位置上，即对于 (m, n) 位置的元素，如果是 0，则令 [m, 0] = 0 且 [0, n] = 0
 * 之后再进行遍历判断：
 * 第一行：从 index = 1 开始，如果有 index 使得 [0, index] = 0，则使矩阵的 index 列全部为 0；
 * 第一列：从 index = 1 开始，如果有 index 使得 [index, 0] = 0，则使矩阵的 index 行全部为 0；
 * (0, 0) 位置：如果 matrix[0, 0] = 0，则使第一行全部为 0
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var rowCount = matrix.length;
  var columnCount = matrix[0].length;

  var makeRowZero = function(matrix, rowIndex) {
    var c = 1;
    while(c < matrix[0].length) {
      matrix[rowIndex][c] = 0;
      c += 1;
    }
  };

  var makeColumnZero = function(matrix, columnIndex) {
    var j = 0;
    while(j < matrix.length) {
      matrix[j][columnIndex] = 0;
      j += 1;
    }
  };

  for (var i = 0; i < matrix.length; i += 1) {
    var row = matrix[i];
    for (var j = 0; j < row.length; j += 1) {
      if (row[j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  var row = matrix[0];
  for (var i = 1; i < row.length; i += 1) {
    if (row[i] === 0) {
      makeColumnZero(matrix, i);
    }
  }

  var rowIndex = 1;
  while(rowIndex < rowCount) {
    if (matrix[rowIndex][0] === 0) {
      makeRowZero(matrix, rowIndex);
    }
    rowIndex += 1;
  }

  if (matrix[0][0] === 0) {
    makeColumnZero(matrix, 0);
  }
};

// test case
var m = [[1,1,1],[0,1,2]];
setZeroes(m);
console.log(m);