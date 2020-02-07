/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Example:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 * 说明:
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 * Example1:
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explain: "a" 无法匹配 "aa" 整个字符串。
 *
 * Example2:
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explain:
 * 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 * Example3:
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explain: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 * Example4:
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explain: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 * Example5:
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 *
 * 注：要实现的 match 必须全量匹配才算 true
 * 比如，'abcd' match  'd*'，用正则可以 match 到 d，但是 d !== abcd，故返回 false
 */

/**
 * Test case
 * isMatch("acccc","aa*..*b*") -> true
 * isMatch("ab",".*...*") -> true
 * isMatch("ab",".*...*.") -> false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 *
 * 回溯算法
 */
var isMatch_backtracking = function(s, p) {
  const match = (i, j) => {
    if (j >= p.length) return i >= s.length
    if (i >= s.length) {
        // last j must can ignore
      if ((p.length - j) % 2 !== 0) return false
      while (j < p.length) {
        if (p[j + 1] !== '*') return false
        j += 2
      }
      return true
    }

    const s1 = s[i]
    const s2 = p[j]

    if (s1 === s2 || s2 === '.') {
      if (p[j + 1] !== '*') return match(i + 1, j + 1)

      let r = match(i, j + 2)
      if (r) return r
      while (
        i < s.length && (s[i] === s2 || s2 === '.')
      ) {
        r = match(i + 1, j + 2)
        if (r) return r
        i += 1
      }
      return r
    } else if (p[j + 1] === '*') {
      return match(i, j + 2)
    }
    return false
  }

  return match(0, 0)
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 *
 * 回溯算法
 */
var isMatch_backtracking2 = function(s, p) {
  const dp = []

  const match = (i, j) => {
    if (!dp[i]) dp[i] = []
    if (dp[i][j] !== undefined) return dp[i][j]

    let result = false
    if (j >= p.length) {
      result = i >= s.length
    } else {
      const s1 = s[i]
      const s2 = p[j]
      const matched = i < s.length && (s1 === s2 || s2 === '.')

      if (p[j + 1] === '*') {
        result = match(i, j + 2) || (matched && match(i + 1, j))
      } else {
        result = matched && match(i + 1, j + 1)
      }
    }

    dp[i][j] = result
    return result
  }

  return match(0, 0)
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 *
 * DP 算法
 * https://leetcode-cn.com/problems/regular-expression-matching/solution/dong-tai-gui-hua-zen-yao-cong-0kai-shi-si-kao-da-b/
 */
var isMatch_dp = function(s, p) {
  const dp = [[true]]

  for (let j = 0; j < p.length; j += 1) {
    if (p[j] === '*' && dp[0][j - 1]) {
      dp[0][j + 1] = true
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (!dp[i + 1]) dp[i + 1] = []

    for (let j = 0; j < p.length; j += 1) {
      if (p[j] === '.' || p[j] === s[i]) {
        dp[i + 1][j + 1] = dp[i][j] || false
      }
      if (p[j] === '*') {
        if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1]
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]
        }
      }
    }
  }

  return dp[s.length][p.length] || false
}

// Test case
console.log(
  isMatch_backtracking('ab', '.*c')
)

console.log(
  isMatch_backtracking('bbbba', '.*a*a')
)
