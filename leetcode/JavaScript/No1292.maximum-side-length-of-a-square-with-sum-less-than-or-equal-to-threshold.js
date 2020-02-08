/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a m x n matrix mat and an integer threshold.
 * Return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square
 *
 * Example 1:
 * Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
 * Output: 2
 * Explanation: The maximum side length of square with sum less than 4 is 2 as shown.
 *
 * Example 2:
 * Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
 * Output: 0
 *
 * Example 3:
 * Input: mat = [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]], threshold = 6
 * Output: 3
 *
 * Example 4:
 * Input: mat = [[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], threshold = 40184
 * Output: 2
 *
 * Constraints:
 * 1. 1 <= m, n <= 300
 * 2. m == mat.length
 * 3. n == mat[i].length
 * 4. 0 <= mat[i][j] <= 10000
 * 5. 0 <= threshold <= 10^5
 *
 * 给你一个大小为 m x n 的矩阵 mat 和一个整数阈值 threshold。
 * 请你返回元素总和小于或等于阈值的正方形区域的最大边长；如果没有这样的正方形区域，则返回 0
 */

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 *
 * 二维前缀和（Prefix Sum）
 */
var maxSideLength = function(mat, threshold) {
  const prefix = []
  for (let i = 0; i <= mat.length; i += 1) {
    prefix[i] = []
    for (let j = 0; j <= mat[0].length; j += 1) {
      prefix[i][j] = (i - 1 >= 0 ? prefix[i - 1][j] || 0 : 0)
        + (prefix[i][j - 1] || 0)
        - (i - 1 >= 0 ? prefix[i - 1][j - 1] || 0 : 0)
        + (i - 1 >= 0 ? mat[i - 1][j - 1] || 0 : 0)
    }
  }

  let result = 0

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j] <= threshold) {
        let row = i
        let col = j

        while (row >= 0 && col >= 0) {
          const area = prefix[i + 1][j + 1] - prefix[i + 1][col] - prefix[row][j + 1] + prefix[row][col]
          if (area > threshold) break
          result = Math.max(result, i + 1 - row)
          if (area === threshold) break

          row -= 1
          col -= 1
        }
      }
    }
  }
  return result
}
