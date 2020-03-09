/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A chess knight can move as indicated in the chess diagram below:
 * This time, we place our chess knight on any numbered key of a phone pad (indicated above), and the knight makes N-1 hops.
 * Each hop must be from one key to another numbered key.
 * Each time it lands on a key (including the initial placement of the knight), it presses the number of that key, pressing N digits total.
 * How many distinct numbers can you dial in this manner?
 * Since the answer may be large, output the answer modulo 10^9 + 7.
 *
 * Example 1:
 * Input: 1
 * Output: 10
 *
 * Example 2:
 * Input: 2
 * Output: 20
 *
 * Example 3:
 * Input: 3
 * Output: 46
 *
 * Note:
 * 1 <= N <= 5000
 *
 * 国际象棋中的骑士可以按下图所示进行移动
 * 这一次，我们将 “骑士” 放在电话拨号盘的任意数字键（如上图所示）上，接下来，骑士将会跳 N-1 步。每一步必须是从一个数字键跳到另一个数字键。
 * 每当它落在一个键上（包括骑士的初始位置），都会拨出键所对应的数字，总共按下 N 位数字。
 * 你能用这种方式拨出多少个不同的号码？
 * 因为答案可能很大，所以输出答案模 10^9 + 7
 */

/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
  const dp = [
    Array.from({ length: 10 }, (_, i) => 1)
  ]
  const base = Math.pow(10, 9) + 7

  for (let i = 1; i < N; i += 1) {
    dp[i] = []
    for (let j = 0; j <= 9; j += 1) {
      let num
      switch (j) {
        case 0:
          num = dp[i - 1][4] + dp[i - 1][6]
          break
        case 1:
          num = dp[i - 1][6] + dp[i - 1][8]
          break
        case 2:
          num = dp[i - 1][7] + dp[i - 1][9]
          break
        case 3:
          num = dp[i - 1][4] + dp[i - 1][8]
          break
        case 4:
          num = dp[i - 1][0] + dp[i - 1][3] + dp[i - 1][9]
          break
        case 5:
          num = 0
          break
        case 6:
          num = dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][7]
          break
        case 7:
          num = dp[i - 1][2] + dp[i - 1][6]
          break
        case 8:
          num = dp[i - 1][1] + dp[i - 1][3]
          break
        case 9:
          num = dp[i - 1][2] + dp[i - 1][4]
          break
      }
      dp[i][j] = num % base
    }
  }

  return dp[N - 1].reduce((n1, n2) => n1 + n2, 0) % base
}
