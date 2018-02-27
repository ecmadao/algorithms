/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 *
 * Example 1:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5
 * max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 *
 * Example 2:
 * Input: [7, 6, 4, 3, 1]
 * Output: 0
 * In this case, no transaction is done, i.e. max profit = 0.
 *
 * 用一个数组表示股票在不同时间的价格，数组的索引代表不同的时间点。
 * 现要求在一个时间点买入，然后在之后的某个时间点卖出。且在一个时间周期内只能买卖各一次
 * 求最大利润
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let minP = prices[0];
  let maxP = 0;
  for (let i = 1; i < prices.length; i += 1) {
    let p = prices[i];
    if (minP < p && maxP < p - minP) {
      maxP = p - minP;
    }
    if (minP > p) minP = p;
  }
  return maxP;
};
