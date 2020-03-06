/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * 请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。
 *
 * 示例 1:
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 * 示例 2:
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 * 示例 3:
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 * 示例 4:
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 * 示例 5:
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 * 1. s 可能为空，且只包含从 a-z 的小写字母。
 * 2. p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = Array.from({ length: s.length + 1 }, (_, i) => {
    return Array.from({ length: p.length + 1 })
  })
  dp[0][0] = true
  for (let j = 1; j <= p.length; j += 1) {
    if (p[j - 1] === '*' && dp[0][j - 2]) dp[0][j] = true
  }

  for (let i = 1; i <= s.length; i += 1) {
    const s1 = s[i - 1]
    for (let j = 1; j <= p.length; j += 1) {
      const s2 = p[j - 1]
      if (s2 === '.' || s1 === s2) {
          dp[i][j] = dp[i - 1][j - 1]
      } else if (s2 === '*') {
        if (p[j - 2] !== s1 && p[j - 2] !== '.') {
          dp[i][j] = dp[i][j - 2] // * 只能匹配 0 次
        } else {
          dp[i][j] = dp[i][j - 1] // p 的上一个和当前的 s 匹配，* 代表仅匹配 1 次
            || dp[i - 1][j] // * 和 s 的上一个匹配，* 代表匹配多次
            || dp[i][j - 2] // * 代表匹配 0 次
        }
      } else {
          dp[i][j] = false
      }
    }
  }

  return dp[s.length][p.length] || false
}
