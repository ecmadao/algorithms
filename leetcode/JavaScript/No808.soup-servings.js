/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are two types of soup: type A and type B. Initially we have N ml of each type of soup. There are four kinds of operations:
 * 1. Serve 100 ml of soup A and 0 ml of soup B
 * 2. Serve 75 ml of soup A and 25 ml of soup B
 * 3. Serve 50 ml of soup A and 50 ml of soup B
 * 4. Serve 25 ml of soup A and 75 ml of soup B
 *
 * When we serve some soup, we give it to someone and we no longer have it.
 * Each turn, we will choose from the four operations with equal probability 0.25.
 * If the remaining volume of soup is not enough to complete the operation, we will serve as much as we can.  We stop once we no longer have some quantity of both types of soup.
 * Note that we do not have the operation where all 100 ml's of soup B are used first.
 * Return the probability that soup A will be empty first, plus half the probability that A and B become empty at the same time.
 *
 * Example:
 * Input: N = 50
 * Output: 0.625
 * Explanation:
 * If we choose the first two operations, A will become empty first. For the third operation, A and B will become empty at the same time.
 * For the fourth operation, B will become empty first. So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.
 *
 * Notes:
 * 1. 0 <= N <= 10^9.
 * 2. Answers within 10^-6 of the true value will be accepted as correct
 *
 * 有 A 和 B 两种类型的汤。一开始每种类型的汤有 N 毫升。有四种分配操作：
 * 1. 提供 100ml 的汤A 和 0ml 的汤B。
 * 2. 提供 75ml 的汤A 和 25ml 的汤B。
 * 3. 提供 50ml 的汤A 和 50ml 的汤B。
 * 4. 提供 25ml 的汤A 和 75ml 的汤B。
 * 当我们把汤分配给某人之后，汤就没有了。每个回合，我们将从四种概率同为0.25的操作中进行分配选择。如果汤的剩余量不足以完成某次操作，我们将尽可能分配。当两种类型的汤都分配完时，停止操作。
 * 注意不存在先分配100 ml汤B的操作。
 * 需要返回的值： 汤A先分配完的概率 + 汤A和汤B同时分配完的概率 / 2
 */

/**
 * @param {number} N
 * @return {number}
 *
 * 动态规划：
 * i, j 分别代表 A，B 汤剩余量
 * 状态转移 dp[i][j] = 0.25 * (dp[i - 100][j] + dp[i -75][j - 25] + dp[i -50][j - 50] + dp[i - 25][j - 75])
 *
 * 需要注意的是：
 * 1. 四种分发基数都是 25，即如果不足 25 按照 25 继续分，那么我们可以将 N 缩小为原来的 25 分之一
 * 2. N的范围是 [0, 10^9]，提示中注明当我们返回的结果与真实误差小于10^-6的时候就算正确。而当 N 趋向于无穷大时，A 先被分完以及 A 和 B 同时被分完的概率会无限接近于 1。经过严格计算我们知道，当 N >= 4800 之后，返回的概率值与 1 的差距就小于 10^-6 了。所以当 N >= 4800 的时候，我们就直接返回 1
 */
var soupServings = function(N) {
  if (N >= 4800) return 1
  const n = Math.floor(N / 25) + (N % 25 === 0 ? 0 : 1)
  const dp = Array.from({ length: n + 1 }, (_, i) => {
    return Array.from({ length: n + 1 }, (_, j) => i === 0 ? 1 : 0)
  })
  dp[0][0] = 0.5

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] = 0.25 * (
        dp[Math.max(0, i - 4)][j] + dp[Math.max(i - 3, 0)][j - 1] + dp[Math.max(0, i - 2)][Math.max(0, j - 2)] + dp[i - 1][Math.max(0, j - 3)]
      )
    }
  }
  return dp[n][n]
}
