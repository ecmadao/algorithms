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
 * 从实现的技术上讲，这道题应该是 Easy 难度，唯一坑人的是要考虑清楚需求：要实现的 match 必须全量匹配才算 true
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
