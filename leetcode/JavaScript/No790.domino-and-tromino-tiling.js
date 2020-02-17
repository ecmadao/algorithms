/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We have two types of tiles: a 2x1 domino shape, and an "L" tromino shape. These shapes may be rotated.
 * 1. XX  <- domino
 * 2. XX  <- "L" tromino
 *    X
 *
 * Given N, how many ways are there to tile a 2 x N board? Return your answer modulo 10^9 + 7.
 * (In a tiling, every square must be covered by a tile.
 * Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.)
 *
 * Example:
 * Input: 3
 * Output: 5
 * Explanation:
 * The five different ways are listed below, different letters indicates different tiles:
 * XYZ XXZ XYY XXY XYY
 * XYZ YYZ XZZ XYY XXY
 *
 * Note:
 * N  will be in range [1, 1000]
 *
 * 有两种形状的瓷砖：一种是 2x1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。
 * 1. XX  <- 多米诺
 * 2. XX  <- "L" 托米诺
 *    X
 * 给定 N 的值，有多少种方法可以平铺 2 x N 的面板？返回值 mod 10^9 + 7
 */


/**
 * @param {number} N
 * @return {number}
 *
 * 动态规划
 * dp[i][0] 表示到长度 i 为止，最后一块恰好补齐的情况有多少种方法
 * dp[i][1] 表示到长度 i 为止，最后一块缺了右下角一个位置有多少种方法
 * dp[i][2] 表示到长度 i 为止,最后一块缺了右上角一个位置有多少种方法
 *
 * 递推公式：
 * dp[i][0] = dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 2][0]
 * dp[i][1] = dp[i - 1][2] + dp[i - 2][0]
 * dp[i][2] = dp[i - 1][1] + dp[i - 2][0]
 */
var numTilings = function(N) {
  const dp = []
  dp[0] = []
  dp[0][0] = 1
  dp[0][1] = 0
  dp[0][2] = 0

  for (let i = 1; i <= N; i += 1) {
    dp[i] = []
    dp[i][0] = (
      dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + (i - 2 >= 0 ? dp[i - 2][0] : 0)
    ) % (Math.pow(10, 9) + 7)
    dp[i][1] = (
      dp[i - 1][2] + (i- 2 >= 0 ? dp[i - 2][0] : 0)
    ) % (Math.pow(10, 9) + 7)
    dp[i][2] = (
      dp[i - 1][1] + (i- 2 >= 0 ? dp[i - 2][0] : 0)
    ) % (Math.pow(10, 9) + 7)
  }

  return dp[N][0]
}
