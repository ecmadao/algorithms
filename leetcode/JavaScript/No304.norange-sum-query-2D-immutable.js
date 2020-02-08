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
 *
 * 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.sum = []
  this.matrix = matrix

  for (let i = 0; i < matrix.length; i += 1) {
    this.sum[i] = []

    for (let j = 0; j < matrix[i].length; j += 1) {
      this.sum[i][j] = (this.sum[i][j - 1] || 0) + matrix[i][j]
    }
  }
}

/**
* @param {number} row1
* @param {number} col1
* @param {number} row2
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let result = 0
  for (let i = row1; i <= row2; i += 1) {
    result += this.sum[i][col2] - this.sum[i][col1] + this.matrix[i][col1]
  }
  return result
}

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/