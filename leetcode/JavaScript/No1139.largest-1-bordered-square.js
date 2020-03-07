/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D grid of 0s and 1s,
 * return the number of elements in the largest square subgrid that has all 1s on its border,
 * or 0 if such a subgrid doesn't exist in the grid.
 *
 * Example 1:
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 9
 *
 * Example 2:
 * Input: grid = [[1,1,0,0]]
 * Output: 1
 *
 * Constraints:
 * 1. 1 <= grid.length <= 100
 * 2. 1 <= grid[0].length <= 100
 * 3. grid[i][j] is 0 or 1
 *
 * 给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，
 * 并返回该子网格中的元素数量。如果不存在，则返回 0
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largest1BorderedSquare = function(matrix) {
  const M = matrix.length
  const N = matrix[0].length

  let result = 0
  const dp = []
  for (let i = 0; i < M; i += 1) {
    if (!dp[i]) dp[i] = []
    for (let j = 0; j < N; j += 1) {
      if (matrix[i][j] === 0) {
        dp[i][j] = [0, 0]
      } else {
        dp[i][j] = [
          (j > 0 ? dp[i][j - 1][0] : 0) + 1,
          (i > 0 ? dp[i - 1][j][1] : 0) + 1
        ]

        let length = 1
        let offset = 1
        while (i - offset >= 0 && j - offset >= 0) {
          if (matrix[i - offset][j] === 0 || matrix[i][j - offset] === 0) break
          const top = dp[i - offset][j]
          const left = dp[i][j - offset]
          if (top[0] >= offset + 1 && left[1] >= offset + 1) length = offset + 1
          offset += 1
        }

        result = Math.max(result, length * length)
      }
    }
  }

  return result
}
