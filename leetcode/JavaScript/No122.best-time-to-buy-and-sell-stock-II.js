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
 * 和上一题相比，在一个时间周期内不限制买卖次数，但是在买入之前要保证已经全部卖出了
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
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
 */
var maxProfit = function(prices) {
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
