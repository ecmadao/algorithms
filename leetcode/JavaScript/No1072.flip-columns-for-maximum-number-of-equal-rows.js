/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix consisting of 0s and 1s, we may choose any number of columns in the matrix and flip every cell in that column.
 * Flipping a cell changes the value of that cell from 0 to 1 or from 1 to 0.
 * Return the maximum number of rows that have all values equal after some number of flips.
 *
 * Example 1:
 * Input: [[0,1],[1,1]]
 * Output: 1
 * Explanation: After flipping no values, 1 row has all values equal.
 *
 * Example 2:
 * Input: [[0,1],[1,0]]
 * Output: 2
 * Explanation: After flipping values in the first column, both rows have equal values.
 *
 * Example 3:
 * Input: [[0,0,0],[0,0,1],[1,1,0]]
 * Output: 2
 * Explanation: After flipping values in the first two columns, the last two rows have equal values.
 *
 * Note:
 * 1. 1 <= matrix.length <= 300
 * 2. 1 <= matrix[i].length <= 300
 * 3. All matrix[i].length's are equal
 * 4. matrix[i][j] is 0 or 1
 *
 * 给定由若干 0 和 1 组成的矩阵 matrix，从中选出任意数量的列并翻转其上的 每个 单元格。翻转后，单元格的值从 0 变成 1，或者从 1 变为 0 。
 * 返回经过一些翻转后，行上所有值都相等的最大行数。
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const map = {}
  for (let i = 0; i < matrix.length; i += 1) {
    const cache = []
    for (let j = 0; j < matrix[i].length; j += 1) {
      cache[matrix[i][j]] += `${j}`
    }
    for (const key of cache) {
      map[key] = (map[key] || 0) + 1
    }
  }

  return Math.max(...Object.values(map))
}
