/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一个方阵，其中每个单元(像素)非黑即白。设计一个算法，找出 4 条边皆为黑色像素的最大子方阵。
 * 返回一个数组 [r, c, size] ，其中 r, c 分别代表子方阵左上角的行号和列号，size 是子方阵的边长。若有多个满足条件的子方阵，返回 r 最小的，若 r 相同，返回 c 最小的子方阵。若无满足条件的子方阵，返回空数组。
 *
 * 示例 1:
 * 输入:
 * [
 *    [1,0,1],
 *    [0,0,1],
 *    [0,0,1]
 * ]
 * 输出: [1,0,2]
 * 解释: 输入中 0 代表黑色，1 代表白色，标粗的元素即为满足条件的最大子方阵
 *
 * 示例 2:
 * 输入:
 * [
 *    [0,1,1],
 *    [1,0,1],
 *    [1,1,0]
 * ]
 * 输出: [0,0,1]
 *
 * 提示：
 * 1. matrix.length == matrix[0].length <= 200
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findSquare = function(matrix) {
  const M = matrix.length
  if (!M) return []
  const N = matrix[0].length

  let result = []
  const dp = []
  for (let i = 0; i < M; i += 1) {
    if (!dp[i]) dp[i] = []
    for (let j = 0; j < N; j += 1) {
      if (matrix[i][j] === 1) {
        dp[i][j] = [0, 0]
      } else {
        dp[i][j] = [
          (j > 0 ? dp[i][j - 1][0] : 0) + 1,
          (i > 0 ? dp[i - 1][j][1] : 0) + 1
        ]

        let length = 1
        let offset = 1
        while (i - offset >= 0 && j - offset >= 0) {
          if (matrix[i - offset][j] === 1 || matrix[i][j - offset] === 1) break
          const top = dp[i - offset][j]
          const left = dp[i][j - offset]
          if (top[0] >= offset + 1 && left[1] >= offset + 1) length = offset + 1
          offset += 1
        }

        const row = i - length + 1
        const col = j - length + 1

        if (!result.length || result[2] < length) {
          result = [row, col, length]
        } else if (
          result[2] === length &&
          (result[0] > row || (result[0] === row && result[1] > col))
        ) {
          result = [row, col, length]
        }
      }
    }
  }

  return result
}

/**
* [
 [0,1,0],
 [0,1,0],
 [0,0,0]
 ]
*/

/**
* [
 [0,0,0],
 [0,1,0],
 [0,0,0]
 ]
*/