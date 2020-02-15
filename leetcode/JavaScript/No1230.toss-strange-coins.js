/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You have some coins.  The i-th coin has a probability prob[i] of facing heads when tossed.
 * Return the probability that the number of coins facing heads equals target if you toss every coin exactly once.
 *
 * Example 1:
 * Input: prob = [0.4], target = 1
 * Output: 0.40000
 *
 * Example 2:
 * Input: prob = [0.5,0.5,0.5,0.5,0.5], target = 0
 * Output: 0.03125
 *
 * Constraints:
 * 1. 1 <= prob.length <= 1000
 * 2. 0 <= prob[i] <= 1
 * 3. 0 <= target <= prob.length
 * 4. Answers will be accepted as correct if they are within 10^-5 of the correct answer.
 *
 * 有一些不规则的硬币。在这些硬币中，prob[i] 表示第 i 枚硬币正面朝上的概率。
 * 请对每一枚硬币抛掷 一次，然后返回正面朝上的硬币数等于 target 的概率
 */

/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 *
 * 动态规划
 */
var probabilityOfHeads = function(prob, target) {
  if (!prob.length) return 0
  if (!target) return prob.reduce((n, p) => n * p, 1)
  const dp = []

  for (let i = 0; i < prob.length; i += 1) {
    dp[i] = []
    dp[i][0] = prob.slice(0, i + 1).reduce((n, p) => n * (1 - p), 1)
    dp[i][i + 1] = prob.slice(0, i + 1).reduce((n, p) => n * p, 1)

    for (let j = 1; j <= Math.min(i + 1, target); j += 1) {
      dp[i][j] = (dp[i - 1] ? dp[i - 1][j] || 0 : 0) * (1 - prob[i]) + (dp[i - 1] ? dp[i - 1][j - 1] : 1) * prob[i]
    }
  }
  return dp[prob.length - 1][target]
}

// Test case
// [0.1,0.2,0.3,0.4,0.5], 3
// [1,1,1,1,1,1,1,1,1,1], 9
