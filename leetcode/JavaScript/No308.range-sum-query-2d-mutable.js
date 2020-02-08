/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example:
 * Given matrix = [
 *  [3, 0, 1, 4, 2],
 *  [5, 6, 3, 2, 1],
 *  [1, 2, 0, 1, 5],
 *  [4, 1, 0, 1, 7],
 *  [1, 0, 3, 0, 5]
 * ]
 *
 * sumRegion(2, 1, 4, 3) -> 8
 * update(3, 2, 2)
 * sumRegion(2, 1, 4, 3) -> 10
 *
 * Note:
 * The matrix is only modifiable by the update function.
 * You may assume the number of calls to update and sumRegion function is distributed evenly.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 *
 * 给你一个 2D 矩阵 matrix，请计算出从左上角 (row1, col1) 到右下角 (row2, col2) 组成的矩形中所有元素的和
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix
  this.sum = []

  for (let i = 0; i < matrix.length; i += 1) {
    this.sum[i] = []
    for (let j = 0; j < matrix[i].length; j += 1) {
      this.sum[i][j] = (this.sum[i][j - 1] || 0) + matrix[i][j]
    }
  }
}

/**
* @param {number} row
* @param {number} col
* @param {number} val
* @return {void}
*/
NumMatrix.prototype.update = function(row, col, val) {
  const offset = val - this.matrix[row][col]
  this.matrix[row][col] = val

  for (let j = col; j < this.matrix[row].length; j += 1) {
    this.sum[row][j] += offset
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
* obj.update(row,col,val)
* var param_2 = obj.sumRegion(row1,col1,row2,col2)
*/