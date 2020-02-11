/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (ie, buy one and sell one share of the stock multiple times).
 * However, you may not engage in multiple transactions at the same time
 * (ie, you must sell the stock before you buy again).
 *
 * Example 1:
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation:
 * Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *
 * Example 2:
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation:
 * Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
 *
 * Example 3:
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * 和上一题相比，在一个时间周期内不限制买卖次数，但是在买入之前要保证已经全部卖出了
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_1 = function(prices) {
  if (!prices.length) return 0;
  let maxP = 0;
  let minP = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    const p = prices[i];
    maxP += p > minP ? p - minP : 0;
    minP = p;
  }
  return maxP;
};

/**
 * @param {number[]} prices
 * @return {number}
 *
 * 动态规划
 */
var maxProfit_2 = function(prices) {
  let profit = 0
  if (!prices.length) return profit

  const tmp = [{
    buy: -prices[0],
    sell: 0
  }]
  for (let i = 1; i < prices.length; i += 1) {
    const price = prices[i]
    tmp[i] = {
      buy: Math.max(
        tmp[i - 1].sell - price,
        tmp[i - 1].buy
      ),
      sell: Math.max(
        tmp[i - 1].buy + price,
        tmp[i - 1].sell
      )
    }
    profit = Math.max(profit, tmp[i].sell)
  }
  return profit
}

/**
 * @param {number[]} prices
 * @return {number}
 *
 * 贪心算法
 */
var maxProfit_3 = function(prices) {
  if (prices.length < 2) return 0

  let result = 0
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) result += (prices[i] - prices[i - 1])
  }
  return result
}
