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
 *
 * DFS 回溯
 */
var coinChange_1 = function(coins, amount) {
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

/*
 * ======================================== 动态规划 ========================================
 * 背包问题
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * 普通解法，二维背包
 */
var coinChange_2 = function(coins, amount) {
  const dp = Array.from({ length: coins.length + 1 }, (_, i) => {
    return Array.from({ length: amount + 1 }, (_, j) => {
      return i > 0 && coins[i - 1] === j ? 1 : (j === 0 ? 0 : Infinity)
    })
  })
  coins.sort((c1, c2) => c1 - c2)

  for (let i = 1; i <= coins.length; i += 1) {
    for (let j = 1; j <= amount; j += 1) {
      if (j < coins[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1)
      }
    }
  }

  return dp[coins.length][amount] === Infinity ? -1 : dp[coins.length][amount]
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * 优化空间，一维背包
 */
var coinChange_3 = function(coins, amount) {
  const dp = Array.from({ length: amount + 1 }, (_, i) => Infinity)
  dp[0] = 0
  coins.sort((c1, c2) => c1 - c2)

  for (const coin of coins) {
    for (let i = coin; i <= amount; i += 1) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * DP
 */
const coinChange_4 = (coins, amount) => {
  const dp = [0]
  coins.sort((c1, c2) => c1 - c2)

  for (let i = 1; i <= amount; i += 1) {
    dp[i] = Infinity

    for (const coin of coins) {
      if (coin > i) break
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}


// Test case
console.log(coinChange_2([2], 3)); // -1
console.log(coinChange_2([1, 5, 2], 11)); // 3
console.log(coinChange_2([1, 5, 2], 12)); // 3
console.log(coinChange_2([186, 419, 83, 408], 6249)); // 20
console.log(coinChange_2([429, 171, 485, 26, 381, 31, 290], 8440)); // 20
