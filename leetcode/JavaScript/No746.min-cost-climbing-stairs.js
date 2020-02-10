/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 * Once you pay the cost, you can either climb one or two steps.
 * You need to find minimum cost to reach the top of the floor,
 * and you can either start from the step with index 0, or the step with index 1.
 *
 * Example:
 * Input: cost = [10, 15, 20]
 * Output: 15
 * Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
 *
 * Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * Output: 6
 * Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
 *
 * Note:
 * 1. cost will have a length in the range [2, 1000].
 * 2. Every cost[i] will be an integer in the range [0, 999].
 *
 * 数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 * 找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs_1 = function(cost) {
  let goThis = 0;
  let unGoThis = 0;
  let i = cost.length - 1;
  while (i >= 0) {
    const tmp = goThis;
    goThis = cost[i] + Math.min(goThis, unGoThis);
    unGoThis = tmp;
    i -= 1;
  }
  return Math.min(goThis, unGoThis);
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs_2 = function(cost) {
  if (cost.length <= 1) return cost.length ? cost[0] : 0
  const dp = [0, 0]

  for (let i = 2; i <= cost.length; i += 1) {
    dp[i] = Math.min(
      dp[i - 1] + cost[i - 1],
      dp[i - 2] + cost[i - 2]
    )
  }
  return dp[cost.length]
}
