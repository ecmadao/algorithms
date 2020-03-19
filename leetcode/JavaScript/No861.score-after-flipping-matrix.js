/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We have a two dimensional matrix A where each value is 0 or 1.
 * A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.
 * After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
 * Return the highest possible score.
 *
 * Example 1:
 * Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
 * Output: 39
 * Explanation:
 * Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
 * 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 *
 * Note:
 * 1. 1 <= A.length <= 20
 * 2. 1 <= A[0].length <= 20
 * 3. A[i][j] is 0 or 1.
 *
 * 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
 * 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
 * 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
 * 返回尽可能高的分数。
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const col = []
  for (let i = 0; i < A.length; i += 1) {
    const convert = A[i][0] === 0
    for (let j = 0; j < A[i].length; j += 1) {
      const num = convert ? A[i][j] ^ 1 : A[i][j]
      col[j] = (col[j] || 0) + (num ? 0 : 1)
      A[i][j] = num
    }
  }

  for (let j = 0; j < col.length; j += 1) {
    if (col[j] > A.length / 2) {
      for (let i = 0; i < A.length; i += 1) {
        A[i][j] ^= 1
      }
    }
  }

  return A.reduce((num, row) => {
    return num + parseInt(row.join(''), 2)
  }, 0)
}

// [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// [[1,1,0,0],[1,0,1,0],[1,1,0,0]]