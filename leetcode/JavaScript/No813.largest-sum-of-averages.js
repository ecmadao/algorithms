/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We partition a row of numbers A into at most K adjacent (non-empty) groups,
 * then our score is the sum of the average of each group. What is the largest score we can achieve?
 * Note that our partition must use every number in A, and that scores are not necessarily integers.
 *
 * Example:
 * Input:
 * A = [9,1,2,3,9]
 * K = 3
 * Output: 20
 * Explanation:
 * The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
 * We could have also partitioned A into [9, 1], [2], [3, 9], for example.
 * That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
 *
 * Note:
 * 1. 1 <= A.length <= 100.
 * 2. 1 <= A[i] <= 10000.
 * 3. 1 <= K <= A.length.
 * 4. Answers within 10^-6 of the correct answer will be accepted as correct
 *
 * 我们将给定的数组 A 分成 K 个相邻的非空子数组，我们的分数由每个子数组内的平均值的总和构成。计算我们所能得到的最大分数是多少。
 * 注意我们必须使用 A 数组中的每一个数进行分组，并且分数不一定需要是整数
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 *
 * 动态规划，区间 DP
 * 设 dp(i, k) 表示将数组 A 中的前 i 个元素 A[:i] 分成 k 个相邻的非空子数组，可以得到的最大分数。dp(i, k) 的值可以通过 dp(j, k - 1) 转移而来，其中 j < i，状态转移方程为：
 * dp(i, k) = max(dp(j, k - 1) + average(j + 1, i))
 * dp(i, 0) = average(0, i)
 */
var largestSumOfAverages = function(A, K) {
  const dp = [null, []]
  const sums = A.reduce((list, a, i) => {
    list.push(list[list.length - 1] + a)
    dp[1][i] = list[list.length - 1] / (i + 1)
    return list
  }, [0])

  if (K === 1 || K === A.length) {
    const sum = sums[sums.length - 1]
    return K === 1 ? sum / A.length : sum
  }

  for (let k = 2; k <= K; k += 1) {
    dp[k] = []
    dp[k][k - 1] = sums[k] - sums[0]

    for (let i = k; i < A.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
        dp[k][i] = Math.max(
          dp[k][i] || -Infinity,
          dp[k - 1][j] + (sums[i + 1] - sums[j + 1]) / (i - j)
        )
      }
    }
  }

  return dp[K][A.length - 1]
}
