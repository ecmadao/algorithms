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
var maxProfit = function(k, prices) {
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
