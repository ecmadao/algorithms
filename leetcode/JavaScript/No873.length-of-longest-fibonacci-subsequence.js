/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A sequence X_1, X_2, ..., X_n is fibonacci-like if:
 * 1. n >= 3
 * 2. X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
 * Given a strictly increasing array A of positive integers forming a sequence,
 * find the length of the longest fibonacci-like subsequence of A.
 * If one does not exist, return 0.
 *
 * Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A,
 * without changing the order of the remaining elements.
 * For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].
 *
 * Example 1:
 * Input: [1,2,3,4,5,6,7,8]
 * Output: 5
 * Explanation:
 * The longest subsequence that is fibonacci-like: [1,2,3,5,8].
 *
 * Example 2:
 * Input: [1,3,7,11,12,14,18]
 * Output: 3
 * Explanation:
 * The longest subsequence that is fibonacci-like:
 * [1,11,12], [3,11,14] or [7,11,18].
 *
 * Note:
 * 1. 3 <= A.length <= 1000
 * 2. 1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
 * 3. (The time limit has been reduced by 50% for submissions in Java, C, and C++.)
 *
 * 如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：
 * 1. n >= 3
 * 2. 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
 * 3. 给定一个**严格递增**的正整数数组形成序列，找到 A 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。
 * （回想一下，子序列是从原序列 A 中派生出来的，它从 A 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  // 注意，数组是严格递增的，因此不存在重复元素
  const indexMap = A.reduce((dict, num, i) => {
    dict[num] = i
    return dict
  }, {})

  const dp = []
  let result = 0
  for (let i = 0; i < A.length; i += 1) {
    if (!dp[i]) dp[i] = []
    for (let j = 0; j < i; j += 1) {
      if (!dp[j]) dp[j] = []
      if (indexMap[A[i] - A[j]] < j && indexMap[A[i] - A[j]] >= 0) {
        dp[j][i] = Math.max(
          dp[j][i] || 2,
          (dp[indexMap[A[i] - A[j]]][j] || 2) + 1
        )
        result = Math.max(result, dp[j][i])
      }
    }
  }

  return result < 3 ? 0 : result
}
