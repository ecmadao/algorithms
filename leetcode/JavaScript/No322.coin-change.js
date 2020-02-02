/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example:
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => a > b);
  const tmp = [];

  const find = (index, target) => {
    if (index < 0) return -1;
    if (!tmp[index]) tmp[index] = [];
    if (tmp[index][target]) return tmp[index][target];

    const max = coins[index];
    const count = Math.floor(target / max);
    if (target % max === 0) {
      tmp[index][target] = count;
      return count;
    }

    let i = count;
    let min = Infinity;
    while (i >= 0) {
      const num = find(index - 1, target - i * max);
      if (num !== -1 && i + num < min) {
        min = i + num;
      }
      i -= 1;
    }
    const result = min === Infinity ? -1 : min;
    tmp[index][target] = result;
    return result;
  };

  return find(coins.length - 1, amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * DP
 */
const coinChange_2 = (coins, amount) => {
  const tmp = [0]
  coins.sort((c1, c2) => c1 - c2)

  for (let i = 1; i <= amount; i += 1) {
    tmp[i] = amount + 1

    for (let j = 0; j < coins.length; j += 1) {
      const coin = coins[j]
      if (coin > i) break
      tmp[i] = Math.min(tmp[i], tmp[i - coin] + 1)
    }
  }
  return tmp[amount] > amount ? -1 : tmp[amount]
}


// Test case
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1, 5, 2], 11)); // 3
console.log(coinChange([1, 5, 2], 12)); // 3
console.log(coinChange([186, 419, 83, 408], 6249)); // 20
console.log(coinChange([429, 171, 485, 26, 381, 31, 290], 8440)); // 20
