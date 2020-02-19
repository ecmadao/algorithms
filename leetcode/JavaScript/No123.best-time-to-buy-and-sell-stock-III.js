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
 * Example 1:
 * Input: [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation:
 * Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
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
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 *
 * 和 No121.Best Time to Buy and Sell Stock 相比，该题在一个时间周期内允许最多两次的买卖，但是在买入之前必须已经卖出
 * 在同一天，可以先卖出然后再买入
 */

/**
* =================== 方法一 ===================
* 可以将时间段分成两段：prices.slice(0, i) 和 prices.slice(i - 1)，分别求两段的最大收益
* 需要注意的是，直接的遍历在面对长数组时会超时，需要额外处理：
* 1. 当左侧数组新加入的值大于之前买入的值时，可以进行计算
* 2. 当右侧数组买入值的索引被去除时，需要重新计算
*/

const rangeProfit = (prices) => {
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
const maxProfit_1 = (prices) => {
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

/**
* =================== 方法二 ===================
*/

const maxProfit_2 = (prices) => {
  let remain1 = -Infinity; // 第一次买入后剩余的钱
  let remain2 = -Infinity; // 第二次买入后剩余的钱
  let profit1 = 0; // 第一次卖出后剩余的钱
  let profit2 = 0; // 第二次卖出后剩余的钱

  for (let i = 0; i < prices.length; i += 1) {
    const price = prices[i];
    remain1 = Math.max(remain1, -price);
    profit1 = Math.max(profit1, price + remain1);
    remain2 = Math.max(remain2, profit1 - price);
    profit2 = Math.max(profit2, price + remain2);
  }
  return profit2;
};

/**
* =================== 方法三 ===================
* 可以作为 No.188 Best Time to Buy and Sell Stock IV 的特殊情况处理：
* 限制的 k 次交易，k = 2
*/

/**
 * @param {number[]} prices
 * @return {number}
 *
 * 动态规划
 * https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484508&idx=1&sn=42cae6e7c5ccab1f156a83ea65b00b78&chksm=9bd7fa54aca07342d12ae149dac3dfa76dc42bcdd55df2c71e78f92dedbbcbdb36dec56ac13b&scene=21#wechat_redirect
 */
var maxProfit_3 = function(prices) {
  if (!prices.length) return 0

  const dp = [
    [
      // 第一次交易
      {
        buy: -prices[0],
        sell: 0
      },
      // 第二次交易
      {
        buy: -Infinity,
        sell: 0
      }
    ]
  ]

  for (let i = 1; i < prices.length; i += 1) {
    dp[i] = []
    for (let j = 0; j < 2; j += 1) {
      dp[i][j] = {}
      dp[i][j].buy = Math.max(
        (j - 1 >= 0 ? dp[i - 1][j - 1].sell : 0) - prices[i],
        dp[i - 1][j].buy
      )
      dp[i][j].sell = Math.max(
        dp[i - 1][j].buy + prices[i],
        dp[i - 1][j].sell
      )
    }
  }

  return Math.max(dp[prices.length - 1][0].sell, dp[prices.length - 1][1].sell)
}
