/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * There are a row of n houses, each house can be painted with one of the three colors: red, blue or green.
 * The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.
 * The cost of painting each house with a certain color is represented by a n x 3 cost matrix.
 * For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.
 *
 * Note:
 * All costs are positive integers.
 *
 * Example:
 * Input: [[17,2,17],[16,16,5],[14,3,19]]
 * Output: 10
 * Explanation:
 * Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
 * Minimum cost: 2 + 5 + 3 = 10.
 *
 * 假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
 * 当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的矩阵来表示的。
 * 例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。请你计算出粉刷完所有房子最少的花费成本
 */

/**
 * @param {number[][]} costs
 * @return {number}
 *
 * 普通动态规划
 */
var minCost_1 = function(costs) {
  if (!costs.length) return 0
  const dp = [costs[0]]
  for (let i = 1; i < costs.length; i += 1) {
    dp[i] = []
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2])
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2])
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1])
  }

  return Math.min(...dp[costs.length - 1])
}

/**
 * @param {number[][]} costs
 * @return {number}
 *
 * 优化空间的动态规划
 */
var minCost_2 = function(costs) {
  if (!costs.length) return 0
  let dp = costs[0]
  for (let i = 1; i < costs.length; i += 1) {
    const tmp = []
    tmp[0] = costs[i][0] + Math.min(dp[1], dp[2])
    tmp[1] = costs[i][1] + Math.min(dp[0], dp[2])
    tmp[2] = costs[i][2] + Math.min(dp[0], dp[1])
    dp = tmp
  }

  return Math.min(...dp)
}
