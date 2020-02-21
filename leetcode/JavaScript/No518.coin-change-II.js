/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given coins of different denominations and a total amount of money.
 * Write a function to compute the number of combinations that make up that amount.
 * You may assume that you have infinite number of each kind of coin.
 *
 * Example1:
 * Input: amount = 5, coins = [1, 2, 5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 *
 * Example2:
 * Input: amount = 3, coins = [2]
 * Output: 0
 * Explanation: the amount of 3 cannot be made up just with coins of 2.
 *
 * Example3:
 * Input: amount = 10, coins = [10]
 * Output: 1
 *
 * Note:
 * You can assume that
 * 1. 0 <= amount <= 5000
 * 2. 1 <= coin <= 5000
 * 3. the number of coins is less than 500
 * 4. the answer is guaranteed to fit into signed 32-bit integer
 *
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个
 */


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 *
 * 递归
 */
var change_1 = function(amount, coins) {
  if (!amount) return 1
  coins = [...new Set(coins)].sort((c1, c2) => c1 - c2)
  const tmp = {}

  const _change = (num, index) => {
    if (!tmp[num]) tmp[num] = {}
    if (tmp[num][index] !== undefined) return tmp[num][index]
    if (index >= coins.length || num < 0) return 0

    let count = 0
    for (let i = index; i < coins.length; i += 1) {
      if (num < coins[i]) break
      if (num === coins[i]) {
        count += 1
        break
      }
      count += _change(num - coins[i], i)
    }
    tmp[num][index] = count
    return count
  }

  return _change(amount, 0)
}

/*
 * ======================================== 动态规划 ========================================
 * 背包问题
 */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 *
 * 普通解法，二维背包
 */
var change_2 = function(amount, coins) {
  coins.sort((c1, c2) => c1 - c2)
  const dp = Array.from({ length: coins.length + 1 }, (_, i) => {
    return Array.from({ length: amount + 1 }, (_, j) => {
      return j === 0 ? 1 : 0
    })
  })

  for (let i = 1; i <= coins.length; i += 1) {
    for (let j = 1; j <= amount; j += 1) {
      dp[i][j] = dp[i - 1][j] + (
        j < coins[i - 1] ? 0 : dp[i][j - coins[i - 1]]
      )
    }
  }

  return dp[coins.length][amount]
}

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 *
 * 优化空间，一维背包
 */
var change_3 = function(amount, coins) {
  const dp = Array.from({ length: amount + 1 }, (_, i) => 0)
  dp[0] = 1

  for (const coin of coins) {
    for (let j = coin; j <= amount; j += 1) {
      dp[j] += dp[j - coin]
    }
  }

  return dp[amount]
}

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 *
 * DP
 */
var change_4 = function(amount, coins) {
  const dp = {
    0: 1
  }

  for (const coin of coins) {
    for (let i = coin; i <= amount; i += 1) {
      dp[i] = (dp[i] || 0) + (dp[i - coin] || 0)
    }
  }

  return dp[amount] || 0
}
