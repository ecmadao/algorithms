/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In the computer world, use restricted resource you have to generate maximum benefit is what we always want to pursue.
 * For now, suppose you are a dominator of m 0s and n 1s respectively. On the other hand, there is an array with strings consisting of only 0s and 1s.
 * Now your task is to find the maximum number of strings that you can form with given m 0s and n 1s. Each 0 and 1 can be used at most once.
 *
 * Note:
 * The given numbers of 0s and 1s will both not exceed 100
 * The size of given string array won't exceed 600.
 *
 * Example 1:
 * Input: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
 * Output: 4
 * Explanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are “10,”0001”,”1”,”0”
 *
 * Example 2:
 * Input: Array = {"10", "0", "1"}, m = 1, n = 1
 * Output: 2
 * Explanation: You could form "10", but then you'd have nothing left. Better form "0" and "1".
 *
 * 在计算机界中，我们总是追求用有限的资源获取最大的收益。
 * 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。
 * 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。
 *
 * 注意:
 * 给定 0 和 1 的数量都不会超过 100。
 * 给定字符串数组的长度不会超过 600
 */

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 * 动态规划，背包问题
 */
var findMaxForm = function(strs, m, n) {
  const dp = Array.from(
    { length: m + 1 },
    (v, i) => Array.from({ length: n + 1 }, (_, i) => 0)
  )

  for (let s = 0; s < strs.length; s += 1) {
    const str = strs[s]
    const map = str.split('').reduce((dict, s) => {
      dict[s] = (dict[s] || 0) + 1
      return dict
    }, { 1: 0, 0: 0 })

    for (let i = m; i >= map['0']; i -= 1) {
      for (let j = n; j >= map['1']; j -= 1) {
        dp[i][j] = Math.max(
          dp[i][j],
          1 + dp[i - map['0']][j - map['1']]
        )
      }
    }
  }
  return dp[m][n]
}
