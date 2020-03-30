/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a matrix A, return the transpose of A.
 * The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
 *
 * Example 1:
 * Input: [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 *
 * Example 2:
 * Input: [[1,2,3],[4,5,6]]
 * Output: [[1,4],[2,5],[3,6]]
 *
 * Note:
 * 1. 1 <= A.length <= 1000
 * 2. 1 <= A[0].length <= 1000
 *
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const res = []
  let c = 0
  while (c < A[0].length) {
    const row = []
    for (let r = 0; r < A.length; r += 1) {
      row.push(A[r][c])
    }
    res.push(row)
    c += 1
  }
  return res
}
