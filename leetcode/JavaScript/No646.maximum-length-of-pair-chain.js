/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.
 * Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.
 * Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.
 *
 * Example 1:
 * Input: [[1,2], [2,3], [3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4]
 *
 * Note:
 * The number of given pairs will be in the range [1, 1000]
 *
 * 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。
 * 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。
 * 给定一个对数集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 *
 * 动态规划
 * No300. Longest Increasing Subsequence
 * No354. Russian Doll Envelopes
 * 都是一样的套路
 */
var findLongestChain = function(pairs) {
  if (!pairs.length) return 0

  pairs.sort((p1, p2) => {
    if (p1[0] === p2[0]) return p1[1] - p2[1]
    return p1[0] - p2[0]
  })
  const dp = []

  for (let i = 0; i < pairs.length; i += 1) {
    dp[i] = 1
    for (let j = 0; j < i; j += 1) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[pairs.length - 1]
}

/**
 * @param {number[][]} pairs
 * @return {number}
 *
 * 贪心
 */
var findLongestChain = function(pairs) {
  if (!pairs.length) return 0

  pairs.sort((p1, p2) => p1[1] - p2[1])

  let pair = pairs[0]
  let i = 1
  let count = 1
  while (i < pairs.length) {
    if (pairs[i][0] > pair[1]) {
      count += 1
      pair = pairs[i]
    }
    i += 1
  }
  return count
}
