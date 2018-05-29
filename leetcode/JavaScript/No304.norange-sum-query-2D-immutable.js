/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D matrix matrix,
 * find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example:
 * Given matrix = [
 * [3, 0, 1, 4, 2],
 * [5, 6, 3, 2, 1],
 * [1, 2, 0, 1, 5],
 * [4, 1, 0, 1, 7],
 * [1, 0, 3, 0, 5]
 * ]
 * sumRegion(2, 1, 4, 3) -> 8
 * sumRegion(1, 1, 2, 2) -> 11
 * sumRegion(1, 2, 2, 4) -> 12
 *
 * Note:
 * You may assume that the matrix does not change.
 * There are many calls to sumRegion function.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const tmp = [];
  for (let r = 0; r < matrix.length; r += 1) {
    const columnLen = matrix[0].length;
    tmp[r] = [];
    for (let c = 0; c < columnLen; c += 1) {
      const num = matrix[r][c];
      if (c > 0 && r > 0) {
        tmp[r][c] = num + tmp[r][c - 1] + tmp[r - 1][c] - tmp[r - 1][c - 1];
      } else if (c === 0 && r > 0) {
        tmp[r][c] = num + tmp[r - 1][c];
      } else if (c > 0 && r === 0) {
        tmp[r][c] = num + tmp[r][c - 1];
      } else {
        tmp[r][c] = num;
      }
    }
  }
  this.tmp = tmp;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.tmp[row2][col2] + (col1 > 0 && row1 > 0 ? this.tmp[row1 - 1][col1 - 1] : 0) - (row1 > 0 ? this.tmp[row1 - 1][col2] : 0) - (col1 > 0 ? this.tmp[row2][col1 - 1] : 0);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
