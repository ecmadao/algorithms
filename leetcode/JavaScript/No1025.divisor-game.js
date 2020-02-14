/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Alice and Bob take turns playing a game, with Alice starting first.
 * Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:
 * 1. Choosing any x with 0 < x < N and N % x == 0.
 * 2. Replacing the number N on the chalkboard with N - x.
 * 3. Also, if a player cannot make a move, they lose the game.
 * Return True if and only if Alice wins the game, assuming both players play optimally.
 *
 * Example 1:
 * Input: 2
 * Output: true
 * Explanation: Alice chooses 1, and Bob has no more moves.
 *
 * Example 2:
 * Input: 3
 * Output: false
 * Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
 *
 * Note:
 * 1. 1 <= N <= 1000
 *
 * 黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：
 * 1. 选出任一 x，满足 0 < x < N 且 N % x == 0 。
 * 2. 用 N - x 替换黑板上的数字 N 。
 * 3. 如果玩家无法执行这些操作，就会输掉游戏
 */

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame_1 = function(N) {
  const cache = {}
  const game = (n) => {
    if (cache[n] !== undefined) return cache[n]
    if (n <= 1) return false

    let result = false
    for (let i = 1; i < n; i += 1) {
      if (n % i === 0) {
        result = !game(n - i)
        if (result) break
      }
    }
    cache[n] = result
    return result
  }

  return game(N)
}

/**
 * @param {number} N
 * @return {boolean}
 *
 * 动态规划
 * dp[i, True] = dp[i-j, False], 其中 i % j==0
 */
var divisorGame_2 = function(N) {
  const dp = [false, false, true]

  for (let i = 3; i <= N; i += 1) {
    for (let j = 1; j < i; j += 1) {
      if (i % j === 0 && !dp[i - j]) {
        dp[i] = true
        break
      }
    }
  }
  return !!dp[N]
}
