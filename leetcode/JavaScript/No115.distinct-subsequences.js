/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string S and a string T, count the number of distinct subsequences of S which equals T.
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 * (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 *
 * Example 1:
 * Input: S = "rabbbit", T = "rabbit"
 * Output: 3
 * Explanation:
 * As shown below, there are 3 ways you can generate "rabbit" from S.
 * (The caret symbol ^ means the chosen letters)
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 *
 * Example 2:
 * Input: S = "babgbag", T = "bag"
 * Output: 5
 * Explanation:
 * As shown below, there are 5 ways you can generate "bag" from S.
 * (The caret symbol ^ means the chosen letters)
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 * ^  ^^
 * babgbag
 *     ^^^
 *
 * 给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。
 * 一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (t.length >= s.length) return t === s ? 1 : 0

  const dp = Array.from({ length: t.length + 1 }, (_, i) => {
    return Array.from({ length: s.length + 1 }, (_, j) => i === 0 ? 1 : 0)
  })

  for (let i = 1; i <= t.length; i += 1) {
    for (let j = 1; j <= s.length; j += 1) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][j - 1] + dp[i - 1][j - 1]
        )
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[t.length][s.length]
}
