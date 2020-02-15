/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of passengers will:
 * 1. Take their own seat if it is still available,
 * 2. Pick other seats randomly when they find their seat occupied
 * What is the probability that the n-th person can get his own seat?
 *
 * Example 1:
 * Input: n = 1
 * Output: 1.00000
 * Explanation: The first person can only get the first seat.
 *
 * Example 2:
 * Input: n = 2
 * Output: 0.50000
 * Explanation: The second person has a probability of 0.5 to get the second seat (when first person gets the first seat).
 *
 * Constraints:
 * 1. 1 <= n <= 10^5
 *
 * 有 n 位乘客即将登机，飞机正好有 n 个座位。第一位乘客的票丢了，他随便选了一个座位坐下。
 * 剩下的乘客将会：
 * 1. 如果他们自己的座位还空着，就坐到自己的座位上，
 * 2. 当他们自己的座位被占用时，随机选择其他座位
 * 第 n 位乘客坐在自己的座位上的概率是多少
 */

/**
 * @param {number} n
 * @return {number}
 *
 * 动态规划：
 * 1. 如果第一个人正好坐在自己的位置，那么之后所有的人都会坐在自己的位置
 * 2. 如果第一个人正好坐在第 n 个人的位置，那么第 n 个人没可能坐在自己的位置。
 * 3. 如果第一个人坐在除了自己位置以及第 n 个人的位置之外的任何位置，情况就如同 n-1 个座位情况
 * 转移方程为: dp[i] = 1 / i + (i - 2) / i * dp[i - 1]
 */
var nthPersonGetsNthSeat = function(n) {
  const dp = [0, 1]
  for (let i = 2; i <= n; i += 1) {
    dp[i] = (1 / i) + ((i - 2) / i) * dp[i - 1]
  }

  return dp[n]
}
