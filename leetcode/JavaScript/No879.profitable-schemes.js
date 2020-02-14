/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * There are G people in a gang, and a list of various crimes they could commit.
 * The i-th crime generates a profit[i] and requires group[i] gang members to participate.
 * If a gang member participates in one crime, that member can't participate in another crime.
 * Let's call a profitable scheme any subset of these crimes that generates at least P profit, and the total number of gang members participating in that subset of crimes is at most G.
 * How many schemes can be chosen?  Since the answer may be very large, return it modulo 10^9 + 7.
 *
 * Example 1:
 * Input: G = 5, P = 3, group = [2,2], profit = [2,3]
 * Output: 2
 * Explanation:
 * To make a profit of at least 3, the gang could either commit crimes 0 and 1, or just crime 1.
 * In total, there are 2 schemes.
 *
 * Example 2:
 * Input: G = 10, P = 5, group = [2,3,5], profit = [6,7,8]
 * Output: 7
 * Explanation:
 * To make a profit of at least 5, the gang could commit any crimes, as long as they commit one.
 * There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).
 *
 * Note:
 * 1. 1 <= G <= 100
 * 2. 0 <= P <= 100
 * 3. 1 <= group[i] <= 100
 * 4. 0 <= profit[i] <= 100
 * 5. 1 <= group.length = profit.length <= 100
 *
 * 帮派里有 G 名成员，他们可能犯下各种各样的罪行。
 * 第 i 种犯罪会产生 profit[i] 的利润，它要求 group[i] 名成员共同参与。
 * 让我们把这些犯罪的任何子集称为盈利计划，该计划至少产生 P 的利润。
 * 有多少种方案可以选择？因为答案很大，所以返回它模 10^9 + 7 的值
 */

/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 *
 * dp[i][j][k] 代表考虑前 i 个 profit 的情况下，在可用人数为 j 个情况下，能获取利润至少为 k 的情况数
 * 状态转移方程为：
 * 令 g = group[i - 1];
 * 令 p = profit[i - 1];
 * 则 dp[i][j][k] = dp[i - 1][j][k] + dp[i - 1][j - g][max(k - p, 0)]
 */
var profitableSchemes = function(G, P, group, profit) {
  const dp = []

  for (let i = 0; i <= profit.length; i += 1) {
    dp[i] = []
    for (let j = 0; j <= G; j += 1) {
      dp[i][j] = []
      dp[i][j][0] = 1
    }
  }

  for (let i = 1; i <= profit.length; i += 1) {
    const g = group[i - 1]
    const p = profit[i - 1]

    for (let j = 1; j <= G; j += 1) {
      for (let k = 0; k <= P; k += 1) {
        dp[i][j][k] = dp[i - 1][j][k] || 0
        if (j >= g) {
          dp[i][j][k] += (dp[i - 1][j - g][Math.max(k - p, 0)] || 0)
        }
        dp[i][j][k] %= 1000000007
      }
    }
  }

  return dp[profit.length][G][P] || 0
}
