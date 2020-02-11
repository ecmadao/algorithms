/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.
 * You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
 * You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)
 * Return the maximum profit you can make.
 *
 * Example 1:
 * Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * Output: 8
 * Explanation: The maximum profit can be achieved by:
 * Buying at prices[0] = 1
 * Selling at prices[3] = 8
 * Buying at prices[4] = 4
 * Selling at prices[5] = 9
 * The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 *
 * Note:
 * 0 < prices.length <= 50000.
 * 0 < prices[i] < 50000.
 * 0 <= fee < 50000
 *
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 返回获得利润的最大值
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 *
 * 动态规划
 */
var maxProfit = function(prices, fee) {
  if (prices.length < 2) return 0

  let dp = {
    buy: -prices[0],
    sell: 0
  }
  let result = 0
  for (let i = 1; i < prices.length; i += 1) {
    const tmp = {
      buy: Math.max(dp.buy, dp.sell - prices[i]),
      sell: Math.max(dp.sell, dp.buy + prices[i] - fee)
    }
    dp = tmp
    result = Math.max(result, dp.sell)
  }
  return result
}
