/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * There is a strange printer with the following two special requirements:
 * The printer can only print a sequence of the same character each time.
 * At each turn, the printer can print new characters starting from and ending at any places, and will cover the original existing characters.
 * Given a string consists of lower English letters only, your job is to count the minimum number of turns the printer needed in order to print it.
 *
 * Example 1:
 * Input: "aaabbb"
 * Output: 2
 * Explanation: Print "aaa" first and then print "bbb".
 *
 * Example 2:
 * Input: "aba"
 * Output: 2
 * Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
 *
 * Hint: Length of the given string will not exceed 100.
 *
 * 有台奇怪的打印机有以下两个特殊要求：
 * 打印机每次只能打印同一个字符序列。
 * 每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。
 * 给定一个只包含小写英文字母的字符串，你的任务是计算这个打印机打印它需要的最少次数。
 */

/**
 * @param {string} s
 * @return {number}
 *
 * 区间 DP 问题
 * https://blog.csdn.net/qq_41855420/article/details/89382912
 */
var strangePrinter = function(s) {
  if (!s.length) return 0

  const dp = Array.from({ length: s.length }, (_, i) => {
    return Array.from({ length: s.length }, (_, j) => {
      return i === j
        ? 1
        : (j - 1 === i ? (s[i] === s[j] ? 1 : 2) : Infinity)
    })
  })

  for (let len = 3; len <= s.length; len += 1) {
    for (let i = 0; i < s.length; i += 1) {
      let j = i + len - 1
      if (j >= s.length) break

      if (s[j] === s[j - 1]) {
        dp[i][j] = dp[i][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1] + 1
        for (let k = i; k < j; k += 1) {
          if (s[k] === s[j]) {
            dp[i][j] = Math.min(
              dp[i][j],
              dp[i][k] + dp[k + 1][j - 1]
            )
          }
        }
      }
    }
  }

  return dp[0][s.length - 1]
}
