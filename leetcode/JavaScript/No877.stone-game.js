/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].
 * The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.
 * Alex and Lee take turns, with Alex starting first.
 * Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.
 * This continues until there are no more piles left, at which point the person with the most stones wins.
 *
 * Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.
 *
 * Example 1:
 * Input: [5,3,4,5]
 * Output: true
 * Explanation:
 * 1. Alex starts first, and can only take the first 5 or the last 5.
 * 2. Say he takes the first 5, so that the row becomes [3, 4, 5].
 * 3. If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
 * 4. If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
 * 5. This demonstrated that taking the first 5 was a winning move for Alex, so we return true.
 *
 * Note:
 * 1. 2 <= piles.length <= 500
 * 2. piles.length is even.
 * 3. 1 <= piles[i] <= 500
 * 4. sum(piles) is odd.
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 *
 * 回溯
 */
var stoneGame = function(piles) {
  const cache = {}

  const _stoneGame = (i, j, player1, player2, whichPlayer) => {
    if (i >= j) return whichPlayer === 1 && player1 > player2
    const key = `${i}-${j}`
    if (cache[key] !== undefined) return cache[key]

    let num = piles[j]
    let result = _stoneGame(
      i, j - 1,
      whichPlayer === 1 ? player1 + num : player1,
      whichPlayer === 2 ? player2 + num : player2,
      whichPlayer === 1 ? 2 : 1
    )
    if (!result) {
      cache[key] = true
      return true
    }

    num = piles[i]
    result = _stoneGame(
      i + 1, j,
      whichPlayer === 1 ? player1 + num : player1,
      whichPlayer === 2 ? player2 + num : player2,
      whichPlayer === 1 ? 2 : 1
    )
    if (!result) {
      cache[key] = true
      return true
    }

    cache[key] = false
    return false
  }

  return _stoneGame(0, piles.length - 1, 0, 0, 1)
}

/**
 * @param {number[]} piles
 * @return {boolean}
 *
 * 动态规划
 * https://leetcode-cn.com/problems/stone-game/solution/jie-jue-bo-yi-wen-ti-de-dong-tai-gui-hua-tong-yong/
 */
var stoneGame_2 = function(piles) {
  let dp = []
  for (let i = 0; i < piles.length; i += 1) {
    if (!dp[i]) dp[i] = []
    for (let j = i; j < piles.length; j += 1) {
      dp[i][j] = {
        player1: 0,
        player2: 0
      }
    }
  }

  dp = piles.reduce((list, pile, index) => {
    list[index][index] = {
      player1: pile,
      player2: 0
    }
    return list
  }, dp)

  for (let i = piles.length - 2; i >= 0; i -= 1) {
    for (let j = i + 1; j < piles.length; j += 1) {
      if (!dp[i][j]) dp[i][j] = {
        player1: 0,
        player2: 0
      }
      const left = piles[i] + dp[i + 1][j].player2
      const right = piles[j] + dp[i][j - 1].player2

      dp[i][j].player1 = Math.max(left, right)
      if (left >= right) {
        dp[i][j].player2 = dp[i + 1][j].player1
      } else {
        dp[i][j].player2 = dp[i][j - 1].player1
      }
    }
  }

  return dp[0][piles.length - 1].player1 > dp[0][piles.length - 1].player2
}
