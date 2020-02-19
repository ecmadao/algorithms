/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integer arrays A and B,
 * return the maximum length of an subarray that appears in both arrays.
 *
 * Example:
 * Input:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * Output: 3
 * Explanation:
 * The repeated subarray with maximum length is [3, 2, 1].
 *
 * Note:
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 *
 * 求两个数组中最长重叠子数组的长度
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  const dp = []
  let result = 0

  for (let i = 0; i < A.length; i += 1) {
    dp[i] = []

    for (let j = 0; j < B.length; j += 1) {
      if (A[i] === B[j]) {
        dp[i][j] = Math.max(
          dp[i][j] || 0,
          (i > 0 ? dp[i - 1][j - 1] || 0 : 0) + 1
        )
      } else {
        dp[i][j] = 0
      }
      result = Math.max(result, dp[i][j])
    }
  }
  return result
}
