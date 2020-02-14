/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * There is a fence with n posts, each post can be painted with one of the k colors.
 * You have to paint all the posts such that no more than two adjacent fence posts have the same color.
 * Return the total number of ways you can paint the fence.
 *
 * Note:
 * n and k are non-negative integers.
 *
 * Example:
 * Input: n = 3, k = 2
 * Output: 6
 * Explanation: Take c1 as color 1, c2 as color 2. All possible ways are:
 *            post1  post2  post3
 * -----      -----  -----  -----
 *    1         c1     c1     c2
 *    2         c1     c2     c1
 *    3         c1     c2     c2
 *    4         c2     c1     c1
 *    5         c2     c1     c2
 *    6         c2     c2     c1
 *
 * 有 k 种颜色的涂料和一个包含 n 个栅栏柱的栅栏，每个栅栏柱可以用其中一种颜色进行上色。
 * 你需要给所有栅栏柱上色，并且保证其中相邻的栅栏柱 最多连续两个 颜色相同。然后，返回所有有效涂色的方案数
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 *
 * 动态规划
 * 问题分析：
 * 在不考虑限制条件（最多连续两个柱子颜色相同）时，
 * 针对每个柱子 i，都有  dp[i] = dp[i - 1] * k 种上色方案。dp[i - 1] 储存上一个柱子的上色方案数。
 * 而一旦限制了条件，我们可以知道，合法的上色方案数是，当前柱子 i 的方案总数 - 上一个柱子和上上个柱子重复上色的方案数。
 * 1. 当前柱子 i 的方案总数 = dp[i - 1] 的方案总数 * k
 * 2. 上一个柱子和上上个柱子重复上色的方案数 = 上上柱子合法的上色方案数
 * 3. 由此，当前柱子和上个柱子重复上色的方案数 = 上个柱子合法的方案数 - 上个柱子和上上个柱子重复上色的方案数
 *
 * 假设 k = 2, i = 4, 让我们从第一个柱子，i = 0 开始递推：
 * 1. i = 0 时，dp[i] = dp[0] => total 总数 k，duplicate 跟上个柱子重复上色的方案数 0
 * 2. i = 1 时，dp[i] = dp[1] => total 总数 = dp[i - 1].total * k - dp[i - 1].duplicate，duplicate 跟上个柱子重复上色的方案数，此时即上个方案总数 dp[i - 1].total
 */
var numWays_1 = function(n, k) {
  if (!k || !n) return 0
  if (k === 1) return n > 2 ? 0 : 1

  const dp = [{
    total: k,
    duplicate: 0
  }]
  for (let i = 1; i < n; i += 1) {
    dp[i] = {
      total: dp[i - 1].total * k - dp[i - 1].duplicate,
      duplicate: dp[i - 1].total - dp[i - 1].duplicate
    }
  }
  return dp[n - 1].total
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 *
 * 动态规划，优化空间
 */
var numWays_2 = function(n, k) {
  if (!k || !n) return 0
  if (k === 1) return n > 2 ? 0 : 1

  const dp = {
    total: k,
    duplicate: 0
  }
  for (let i = 1; i < n; i += 1) {
    const { total, duplicate } = dp
    dp.total = total * k - duplicate
    dp.duplicate = total - duplicate
  }
  return dp.total
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 *
 * 动态规划
 * 当前栅栏的涂色方案有两种
 * 1. 和前一个颜色相同，此时说明前一个的栅栏的颜色应与更前面一个栅栏的颜色不同，更前一个栅栏的涂色方法有 F(n - 2) 种，前一个栅栏的涂色方式有 (k - 1) 种，所以此时情况应为 F(n - 2) * (k - 1)
 * 2. 和前一个颜色不同，前一个栅栏的涂色方法有 F(n - 1) 种，当前栅栏的涂色方式有 (k - 1) 种，此时情况应为 F(n - 1) * (k - 1)
 * 所以递推公式应为 F(n) = F(n - 2) * (k - 1) + F(n - 1) * (k - 1)
 */
var numWays_3 = function(n, k) {
  if (!k || !n) return 0
  if (k === 1) return n > 2 ? 0 : 1

  const dp = [k, k * k]

  for (let i = 2; i < n; i += 1) {
    dp[i] = dp[i - 1] * (k - 1) + dp[i - 2] * (k - 1)
  }
  return dp[n - 1]
}
