/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You have a number of envelopes with widths and heights given as a pair of integers (w, h).
 * One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.
 * What is the maximum number of envelopes can you Russian doll? (put one inside other)
 *
 * Note:
 * Rotation is not allowed.
 *
 * Example:
 * Input: [[5,4],[6,4],[6,7],[2,3]]
 * Output: 3
 * Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
 *
 * 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 * 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 *
 * 说明:
 * 不允许旋转信封
 */

/**
 * @param {number[][]} envelopes
 * @return {number}
 *
 * 动态规划
 * No300. Longest Increasing Subsequence
 * No646. Maximum Length of Pair Chain
 * 都是一样的套路
 */
var maxEnvelopes = function(envelopes) {
  if (!envelopes.length) return 0

  // 让宽高都小的尽量排在前面
  envelopes.sort((e1, e2) => e1[0] + e1[1] - e2[0] - e2[1])

  let result = 0
  const dp = []
  for (let i = 0; i < envelopes.length; i += 1) {
    const e1 = envelopes[i]
    dp[i] = 1
    for (let j = 0; j < i; j += 1) {
      const e2 = envelopes[j]
      if (e1[0] > e2[0] && e1[1] > e2[1]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    result = Math.max(result, dp[i])
  }
  return result
}
