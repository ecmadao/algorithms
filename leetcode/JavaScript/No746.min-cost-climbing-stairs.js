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
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
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
