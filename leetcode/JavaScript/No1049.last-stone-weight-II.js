/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We have a collection of rocks, each rock has a positive integer weight.
 * Each turn, we choose any two rocks and smash them together.
 * Suppose the stones have weights x and y with x <= y.  The result of this smash is:
 * 1. If x == y, both stones are totally destroyed;
 * 2. If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
 * At the end, there is at most 1 stone left.  Return the smallest possible weight of this stone (the weight is 0 if there are no stones left.)
 *
 * Example 1:
 * Input: [2,7,4,1,8,1]
 * Output: 1
 * Explanation:
 * 1. We can combine 2 and 4 to get 2 so the array converts to [2,7,1,8,1] then,
 * 2. we can combine 7 and 8 to get 1 so the array converts to [2,1,1,1] then,
 * 3. we can combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * 4. we can combine 1 and 1 to get 0 so the array converts to [1] then that's the optimal value.
 *
 * Note:
 * 1. 1 <= stones.length <= 30
 * 2. 1 <= stones[i] <= 100
 *
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 1. 如果 x == y，那么两块石头都会被完全粉碎；
 * 2. 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回 0
 */

/**
 * @param {number[]} stones
 * @return {number}
 *
 * 转换为背包问题是解题关键
 * https://leetcode-cn.com/problems/last-stone-weight-ii/solution/dong-tai-gui-hua-bei-bao-wen-ti-xiang-jie-by-jiach/
 */
var lastStoneWeightII = function(stones) {
  const sum = stones.reduce((n1, n2) => n1 + n2, 0)
  const capacity = Math.ceil(sum / 2)
  const dp = []

  for (let i = 1; i <= stones.length; i += 1) {
    for (let j = capacity; j >= stones[i - 1]; j -= 1) {
      dp[j] = Math.max(
        dp[j] || 0,
        (dp[j - stones[i - 1]] || 0) + stones[i - 1]
      )
    }
  }

  return Math.abs(sum - dp[capacity] * 2)
}
