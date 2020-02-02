/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.
 * However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.
 *
 * Example:
 * n = 10, I pick 8.
 * First round:  You guess 5, I tell you that it's higher. You pay $5.
 * Second round: You guess 7, I tell you that it's higher. You pay $7.
 * Third round:  You guess 9, I tell you that it's lower. You pay $9.
 * Game over. 8 is the number I picked.
 * You end up paying $5 + $7 + $9 = $21.
 *
 * Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.
 *
 * 玩一个猜数游戏，游戏规则如下：
 * 从 1 到 n 之间选择一个数字，猜测选了哪个数字。
 * 每次猜错，都会得知，猜的数字是大还是小
 * 然而，当猜了数字 x 并且猜错了的时候，我们需要支付金额为 x 的现金。直到猜到选的数字，才算赢得了这个游戏。
 */

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  const dp = []

  for (let i = n; i >= 1; i -= 1) {
    if (!dp[i]) dp[i] = []

    for (let j = i; j <= n; j += 1) {
      if (i === j) {
        dp[i][j] = 0
      } else {
        dp[i][j] = Infinity
        for (let x = i; x <= j; x += 1) {
          const left = dp[i][x - 1] === undefined ? -Infinity : dp[i][x - 1]
          const right = dp[x + 1] && dp[x + 1][j] !== undefined ? dp[x + 1][j] : -Infinity
          dp[i][j] = Math.min(
            dp[i][j], Math.max(left, right) + x
          )
        }
      }
    }
  }

  return dp[1][n]
}
