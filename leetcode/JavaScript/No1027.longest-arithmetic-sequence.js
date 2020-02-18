/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array A of integers, return the length of the longest arithmetic subsequence in A.
 * Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1,
 * and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).
 * 
 * Example 1:
 * Input: [3,6,9,12]
 * Output: 4
 * Explanation:
 * The whole array is an arithmetic sequence with steps of length = 3.
 * 
 * Example 2:
 * Input: [9,4,7,2,10]
 * Output: 3
 * Explanation:
 * The longest arithmetic subsequence is [4,7,10].
 * 
 * Example 3:
 * Input: [20,1,15,3,10,5,8]
 * Output: 4
 * Explanation:
 * The longest arithmetic subsequence is [20,15,10,5].
 * 
 * Note:
 * 1. 2 <= A.length <= 2000
 * 2. 0 <= A[i] <= 10000
 * 
 * 给定一个整数数组 A，返回 A 中最长等差子序列的长度。
 * 回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <= A.length - 1。
 * 并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B 是等差的
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  if (A.length <= 1) return 0

  let result = 0
  const dp = []
  for (let i = 0; i < A.length; i += 1) {
      dp[i] = {}
      for (let j = i - 1; j >= 0; j -= 1) {
        const diff = A[i] - A[j]
        dp[i][diff] = Math.max(
          dp[i][diff] || 0,
          (dp[j][diff] || 1) + 1
        )
        result = Math.max(result, dp[i][diff])
      }
  }
  return result
}

// Test case
// [22,8,57,41,36,46,42,28,42,14,9,43,27,51,0,0,38,50,31,60,29,31,20,23,37,53,27,1,47,42,28,31,10,35,39,12,15,6,35,31,45,21,30,19,5,5,4,18,38,51,10,7,20,38,28,53,15,55,60,56,43,48,34,53,54,55,14,9,56,52]