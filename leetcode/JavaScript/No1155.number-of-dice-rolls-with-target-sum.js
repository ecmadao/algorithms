/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You have d dice, and each die has f faces numbered 1, 2, ..., f.
 * Return the number of possible ways (out of fd total ways) modulo 10^9 + 7 to roll the dice so the sum of the face up numbers equals target.
 *
 * Example 1:
 * Input: d = 1, f = 6, target = 3
 * Output: 1
 * Explanation:
 * You throw one die with 6 faces.  There is only one way to get a sum of 3.
 *
 * Example 2:
 * Input: d = 2, f = 6, target = 7
 * Output: 6
 * Explanation:
 * You throw two dice, each with 6 faces.  There are 6 ways to get a sum of 7:
 * 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
 *
 * Example 3:
 * Input: d = 2, f = 5, target = 10
 * Output: 1
 * Explanation:
 * You throw two dice, each with 5 faces.  There is only one way to get a sum of 10: 5+5.
 *
 * Example 4:
 * Input: d = 1, f = 2, target = 3
 * Output: 0
 * Explanation:
 * You throw one die with 2 faces.  There is no way to get a sum of 3.
 *
 * Example 5:
 * Input: d = 30, f = 30, target = 500
 * Output: 222616187
 * Explanation:
 * The answer must be returned modulo 10^9 + 7.
 *
 * Constraints:
 * 1. 1 <= d, f <= 30
 * 2. 1 <= target <= 1000
 *
 * 这里有 d 个一样的骰子，每个骰子上都有 f 个面，分别标号为 1, 2, ..., f。
 * 我们约定：掷骰子的得到总点数为各骰子面朝上的数字的总和。
 * 如果需要掷出的总点数为 target，请你计算出有多少种不同的组合情况（所有的组合情况总共有 f^d 种），模 10^9 + 7 后返回
 *
 * https://leetcode-cn.com/problems/number-of-dice-rolls-with-target-sum/solution/zuo-ti-guo-cheng-ji-lu-dpjie-fa-by-maverickbytes/
 */

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  if (!target) return 0
  if (d * f < target) return 0
  if (d * f === target) return 1

  const dp = [[0]]

  for (let j = 1; j <= target; j += 1) {
    dp[j] = []
    for (let i = 1; i <= d; i += 1) {
      if (i === 1 && j <= f) {
        dp[j][i] = 1
      } else {
        for (let z = 1; z <= f; z += 1) {
          dp[j][i] = (
            (dp[j][i] || 0) + (j - z > 0 ? dp[j - z][i - 1] || 0 : 0)
          ) % (Math.pow(10, 9) + 7)
        }
      }
    }
  }

  return dp[target][d]
}

/**
 * 扩展阅读：关于对 10^9 + 7 取模的说明
 * Modulo 10^9+7 (1000000007): https://www.geeksforgeeks.org/modulo-1097-1000000007/
 * Why “OUTPUT THE ANSWER MODULO 10^9 + 7"?: https://www.hackerearth.com/practice/notes/abhinav92003/why-output-the-answer-modulo-109-7/
 * 知乎 - 为什么很多程序竞赛题目都要求答案对 1e9+7 取模？: https://www.zhihu.com/question/49374703
 */
