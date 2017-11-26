/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 *
 * Note:
 * You may not engage in multiple transactions at the same time
 * (ie, you must sell the stock before you buy again).
 *
 * Test case
 * [2, 4, 1]
 * [2, 1, 2, 0, 1]
 * [9, 9, 0, 3, 0, 7, 7, 7, 4, 1, 5, 0, 1, 7]
 * [3, 5, 3, 4, 1, 4, 5, 0, 7, 8, 5, 6, 9, 4, 1]
 *
 * 和 No121.Best Time to Buy and Sell Stock 相比，该题在一个时间周期内允许最多两次的买卖，但是在买入之前必须已经卖出
 * 在同一天，可以先卖出然后再买入
 * 因此，可以将时间段分成两段：prices.slice(0, i) 和 prices.slice(i - 1)，分别求两段的最大收益
 * 需要注意的是，直接的遍历在面对长数组时会超时，需要额外处理：
 * 1. 当左侧数组新加入的值大于之前买入的值时，可以进行计算
 * 2. 当右侧数组买入值的索引被去除时，需要重新计算
 */

var rangeProfit = (prices) => {
  if (prices.length <= 1) return [0, null, null];
  let inP = prices[0];
  let inPIndex = 0;
  let inPIndexTmp = 0;
  let maxP = 0;
  for (let i = 1; i < prices.length; i += 1) {
    let p = prices[i];
    if (inP < p && maxP < p - inP) {
      maxP = p - inP;
      inPIndex = inPIndexTmp;
    }
    if (inP > p) {
      inP = p;
      inPIndexTmp = i;
    }
  }
  return [maxP, inPIndex, inP];
};

/**
* @param {number[]} prices
* @return {number}
*/
var maxProfit = function(prices) {
  let maxP = 0;
  if (!prices.length) return maxP;
  let leftMax = null;
  let leftIn = null;
  let rightMax = null;
  let rightInIndex = null;

  for (let i = 1; i < prices.length; i += 1) {
    if (!leftMax || !leftIn || leftIn < prices[i - 1]) {
      const leftDatas = rangeProfit(prices.slice(0, i));
      leftMax = leftDatas[0];
      leftIn = leftDatas[2];
    }
    if (rightInIndex === null || i - 1 > rightInIndex) {
      const rightDatas = rangeProfit(prices.slice(i - 1));
      rightMax = rightDatas[0];
      rightInIndex = rightDatas[1] + i - 1;
    }
    const mP = leftMax + rightMax;
    if (mP > maxP) maxP = mP;
  }
  return maxP;
};
