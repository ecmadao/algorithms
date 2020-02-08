/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a m * n matrix mat and an integer K,
 * return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K,
 * and (r, c) is a valid position in the matrix.
 *
 * Example 1:
 * Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
 * Output: [[12,21,16],[27,45,33],[24,39,28]]
 *
 * Example 2:
 * Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
 * Output: [[45,45,45],[45,45,45],[45,45,45]]
 *
 * Constraints:
 * - m == mat.length
 * - n == mat[i].length
 * - 1 <= m, n, K <= 100
 * - 1 <= mat[i][j] <= 100
 *
 * 给你一个 m * n 的矩阵 mat 和一个整数 K ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和： 
 * - i - K <= r <= i + K, j - K <= c <= j + K
 * - (r, c) 在矩阵内
 */


/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum_1 = function(mat, K) {
  const result = []

  for (let i = 0; i < mat.length; i += 1) {
    result[i] = []

    for (let j = 0; j < mat[i].length; j += 1) {
      if (i > 0 && j === 0) {
        result[i][j] = result[i - 1][j]
        if (i + K < mat.length) {
          for (let index = 0; index <= Math.min(mat[i].length - 1, j + K); index += 1) {
            result[i][j] += mat[i + K][index]
          }
        }
        if (i - 1 - K >= 0) {
          for (let index = 0; index <= Math.min(mat[i].length - 1, j + K); index += 1) {
            result[i][j] -= mat[i - 1 - K][index]
          }
        }
      } else if (j > 0) {
        result[i][j] = result[i][j - 1]
        if (j + K < mat[i].length) {
          for (let index = Math.max(0, i - K); index <= Math.min(mat.length - 1, i + K); index += 1) {
            result[i][j] += mat[index][j + K]
          }
        }
        if (j - 1 - K >= 0) {
          for (let index = Math.max(0, i - K); index <= Math.min(mat.length - 1, i + K); index += 1) {
            result[i][j] -= mat[index][j - 1 - K]
          }
        }
      } else {
        result[i][j] = 0
        for (let row = Math.max(0, i - K); row <= Math.min(mat.length - 1, i + K); row += 1) {
          for (let col = Math.max(0, j - K); col <= Math.min(mat[i].length - 1, j + K); col += 1) {
            result[i][j] += mat[row][col]
          }
        }
      }
    }
  }
  return result
}


/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 *
 * 二维前缀和（Prefix Sum）
 * https://leetcode-cn.com/problems/matrix-block-sum/solution/ju-zhen-qu-yu-he-by-leetcode/
 * https://leetcode-cn.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solution/yuan-su-he-xiao-yu-deng-yu-yu-zhi-de-zheng-fang-xi/
 */
var matrixBlockSum_2 = function(mat, K) {
  const prefix = []

  for (let i = 0; i <= mat.length; i += 1) {
    prefix[i] = []
    for (let j = 0; j <= mat[0].length; j += 1) {
      prefix[i][j] = (prefix[i][j - 1] || 0)
        + (i - 1 >= 0 ? prefix[i - 1][j] : 0)
        - (i - 1 >= 0 ? prefix[i - 1][j - 1] || 0 : 0)
        + (i - 1 >= 0 ? mat[i - 1][j - 1] || 0 : 0)
    }
  }

  const result = []
  for (let i = 0; i < mat.length; i += 1) {
    result[i] = []
    for (let j = 0; j < mat[i].length; j += 1) {
      const row = Math.min(i + K + 1, mat.length)
      const col = Math.min(j + K + 1, mat[i].length)
      result[i][j] = prefix[row][col]
      if (i - K > 0 && j - K <= 0) {
        result[i][j] -= prefix[i - K][col]
      } else if (i - K <= 0 && j - K > 0) {
        result[i][j] -= prefix[row][j - K]
      } else if (i - K > 0 && j - K > 0) {
        result[i][j] -= (prefix[i - K][col] + prefix[row][j - K] - prefix[i - K][j - K])
      }
    }
  }

  return result
}
