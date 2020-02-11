/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most k transactions.
 *
 * Note:
 * You may not engage in multiple transactions at the same time
 * (ie, you must sell the stock before you buy again).
 *
 * Example 1:
 * Input: [2,4,1], k = 2
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
 *
 * Example 2:
 * Input: [3,2,6,5,0,3], k = 2
 * Output: 7
 * Explanation:
 * Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
 * Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 */

/**
* ====================================== 方法 1 ======================================
*/

const unlimitedProfit = (prices) => {
  let p = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) {
      p += prices[i] - prices[i - 1];
    }
  }
  return p;
};

/**
* @param {number} k
* @param {number[]} prices
* @return {number}
*/
var maxProfit_1 = function(k, prices) {
  if (k < 1) return 0;
  if (k >= prices.length / 2) return unlimitedProfit(prices);

  const tmp = [];
  for (let i = 1; i <= k; i += 1) {
    tmp[i] = [];
    let remain = -prices[0]; // 第 1 次买入之后的余额
    tmp[i][0] = 0; // 第 0 天后的收入
    for (let j = 1; j < prices.length; j += 1) {
      tmp[i][j] = Math.max(tmp[i][j - 1], prices[j] + remain); // 卖出后的收入
      remain = i > 1
        ? Math.max(remain, tmp[i - 1][j - 1] - prices[j])
        : Math.max(remain, -prices[j]); // 再次买入后的余额
    }
  }
  return tmp[k][prices.length - 1];
};

/**
* ====================================== 方法 2 ======================================
*/

var maxProfit_Infinity = function(prices) {
  if (prices.length < 2) return 0

  let result = 0
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) result += (prices[i] - prices[i - 1])
  }
  return result
}

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_2 = function(k, prices) {
  if (k > Math.floor(prices.length / 2)) {
    // 一次交易由买入和卖出构成，至少需要两天。所以有效的限制次数 k 应该不超过 n/2，如果超过，就没有约束作用了，相当于 k = +infinity
    return maxProfit_Infinity(prices)
  }
  // 代表上一天的决策。dp 内的索引 1, 2, 3...k 代表上一天进行第 k 次交易后的状态
  let dp = {
    1: {
      buy: -prices[0],
      sell: 0
    }
  }
  let result = 0
  for (let i = 1; i < prices.length; i += 1) {
    const tmp = {}

    for (let j = 1; j <= k; j += 1) {
      tmp[j] = {}

      tmp[j].sell = Math.max(
        dp[j] ? dp[j].sell : 0,
        (dp[j] ? dp[j].buy : -Infinity) + prices[i]
      )
      tmp[j].buy = Math.max(
        dp[j] ? dp[j].buy : -Infinity,
        (dp[j - 1] ? dp[j - 1].sell : 0) - prices[i]
      )
      result = Math.max(result, tmp[j].sell)
    }
    dp = tmp
  }
  return result
}
