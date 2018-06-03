/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Say you have an array for which the i^th element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit.
 * You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
 * 1. You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * 2. After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
 *
 * Example:
 * Input: [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 *
 * 给出一个代表股票每天价格变化的数组，你可以在那一天买入、卖出股票，或者什么也不做。规则如下：
 * 1. 在卖出前必须有买入
 * 2. 卖出后必须冷却一天（什么也不做）
 * 3. 卖出股票是一次性全部卖出
 *
 * 求如何达到最大利润
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0;
  let sell = 0;
  let cooldown = 0;

  for (let i = 0; i < prices.length; i += 1) {
    const price = prices[i];
    const sellTmp = sell;
    const buyTmp = buy;
    const cooldownTmp = cooldown;

    if (i === 0) {
      cooldown = 0;
      buy = -price;
      continue;
    }

    cooldown = Math.max(cooldownTmp, buyTmp, sellTmp);
    sell = i >= 2 ? Math.max(cooldownTmp, buyTmp + price, sell) : Math.max(sell, buyTmp + price);
    buy = Math.max(cooldownTmp - price, buyTmp);
  }
  return Math.max(cooldown, sell, buy);
};

// Test case
console.log(maxProfit([1,2,4])); // 3
console.log(maxProfit([1,2,3,0,2])); // 3
