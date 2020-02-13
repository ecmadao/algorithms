/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a positive integer n, return the number of all possible attendance records with length n,
 * which will be regarded as rewardable. The answer may be very large, return it after mod 109 + 7.
 *
 * A student attendance record is a string that only contains the following three characters:
 * 1. 'A' : Absent.
 * 2. 'L' : Late.
 * 3. 'P' : Present.
 *
 * A record is regarded as rewardable if it doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
 *
 * Example 1:
 * Input: n = 2
 * Output: 8
 * Explanation:
 * There are 8 records with length 2 will be regarded as rewardable:
 * "PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
 * Only "AA" won't be regarded as rewardable owing to more than one absent times.
 *
 * 给定一个正整数 n，返回长度为 n 的所有可被视为可奖励的出勤记录的数量。 答案可能非常大，你只需返回结果mod 109 + 7的值。
 * 学生出勤记录是只包含以下三个字符的字符串：
 * 1. 'A' : Absent，缺勤
 * 2. 'L' : Late，迟到
 * 3. 'P' : Present，到场
 *
 * 如果记录不包含多于一个'A'（缺勤）或超过两个连续的'L'（迟到），则该记录被视为可奖励的
 */

/**
 * @param {number} n
 * @return {number}
 *
 * 动态规划
 */
var checkRecord = function(n) {
  // dp[i][j][k] 表示有 i 个 A, 结尾是连续 j 个 L, 长度为 k 的字符串所代表的组合数
  const dp = []
  dp[0] = []
  dp[1] = []

  dp[0][0] = []
  dp[0][1] = []
  dp[0][2] = []
  dp[1][0] = []
  dp[1][1] = []
  dp[1][2] = []

  dp[0][0][0] = 1
  dp[0][1][0] = 1
  dp[0][2][0] = 0
  dp[1][0][0] = 1
  dp[1][1][0] = 0
  dp[1][2][0] = 0

  for (let i = 1; i < n; i += 1) {
    dp[0][0][i] = (
      dp[0][0][i - 1] + dp[0][1][i - 1] + dp[0][2][i - 1]
    ) % 1000000007
    dp[0][1][i] = dp[0][0][i - 1] % 1000000007
    dp[0][2][i] = dp[0][1][i - 1] % 1000000007

    dp[1][0][i] = (
      dp[0][0][i - 1] + dp[0][1][i - 1] + dp[0][2][i - 1] +
      dp[1][0][i - 1] + dp[1][1][i - 1] + dp[1][2][i - 1]
    ) % 1000000007
    dp[1][1][i] = dp[1][0][i - 1] % 1000000007
    dp[1][2][i] = dp[1][1][i - 1] % 1000000007
  }

  return (
    dp[0][0][n - 1] + dp[0][1][n - 1] + dp[0][2][n - 1] +
    dp[1][0][n - 1] + dp[1][1][n - 1] + dp[1][2][n - 1]
  ) % 1000000007
}
