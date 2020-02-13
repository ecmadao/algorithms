/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string S, find the number of different non-empty palindromic subsequences in S, and return that number modulo 10^9 + 7.
 * A subsequence of a string S is obtained by deleting 0 or more characters from S.
 * A sequence is palindromic if it is equal to the sequence reversed.
 * Two sequences A_1, A_2, ... and B_1, B_2, ... are different if there is some i for which A_i != B_i.
 *
 * Example:
 * Input:
 * S = 'bccb'
 * Output: 6
 * Explanation:
 * The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
 * Note that 'bcb' is counted only once, even though it occurs twice.
 *
 * Input:
 * S = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
 * Output: 104860361
 * Explanation:
 * There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 10^9 + 7.
 *
 * Note:
 * - The length of S will be in the range [1, 1000].
 * - Each character S[i] will be in the set {'a', 'b', 'c', 'd'}.
 *
 * 给定一个字符串 S，找出 S 中不同的非空回文子序列个数，并返回该数字与 10^9 + 7 的模。
 * 通过从 S 中删除 0 个或多个字符来获得子字符序列
 *
 * 提示：
 * 1. 字符串 S 的长度将在[1, 1000]范围内。
 * 2. 每个字符 S[i] 将会是集合 {'a', 'b', 'c', 'd'} 中的某一个
 */

/**
 * @param {string} S
 * @return {number}
 *
 * 深度优先遍历
 */
var countPalindromicSubsequences_1 = function(S) {
  const cache = {}

  const dfs = (start, end) => {
    if (cache[`${start}-${end}`] !== undefined) return cache[`${start}-${end}`]

    let count = 0
    for (const char of ['a', 'b', 'c', 'd']) {
      const left = S.indexOf(char, start)
      if (left === -1) continue

      let right = end
      while (char !== S[right] && right >= left) right -= 1
      if (right >= left) {
        count += right === left ? 1 : dfs(left + 1, right - 1) + 2
      }
    }

    cache[`${start}-${end}`] = count % 1000000007
    return cache[`${start}-${end}`]
  }

  return dfs(0, S.length - 1)
}

/**
 * @param {string} S
 * @return {number}
 *
 * 动态规划
 * https://leetcode-cn.com/problems/count-different-palindromic-subsequences/solution/tong-ji-bu-tong-hui-wen-zi-zi-fu-chuan-by-leetcode/
 */
var countPalindromicSubsequences_2 = function(S) {
  const dp = []
  const codes = ['a', 'b', 'c', 'd']

  const getData = (i, j, k) => {
    if (!dp[i]) return 0
    if (!dp[i][j]) return 0
    return dp[i][j][k] || 0
  }

  for (let i = S.length - 1; i >= 0; i -= 1) {
    if (!dp[i]) dp[i] = []
    for (let j = i; j < S.length; j += 1) {
      if (!dp[i][j]) dp[i][j] = []
      for (let k = 0; k < codes.length; k += 1) {
        const char = codes[k]
        if (i === j) {
          dp[i][j][k] = S[i] === char ? 1 : 0
        } else if (S[i] !== char) {
          dp[i][j][k] = getData(i + 1, j, k)
        } else if (S[j] !== char) {
          dp[i][j][k] = getData(i, j - 1, k)
        } else {
          dp[i][j][k] = j - 1 === i
            ? 2
            : 2 + getData(i + 1, j - 1, 0) + getData(i + 1, j - 1, 1) + getData(i + 1, j - 1, 2) + getData(i + 1, j - 1, 3)
        }
        dp[i][j][k] %= 1000000007
      }
    }
  }

  return codes.reduce((n, _, i) => n + dp[0][S.length - 1][i], 0) % 1000000007
}


// Test case
countPalindromicSubsequences_2('cb'); // 2
countPalindromicSubsequences_2('ccb'); // 3
countPalindromicSubsequences_2('cacb'); // 5
countPalindromicSubsequences_2('bccb'); // 6
countPalindromicSubsequences_2('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'); // 104860361
countPalindromicSubsequences_2("baaddaaabaddccbbbdcbcccbdbdabdabdbadabddbbcbbcabbccdaccdbcbbcdcdbaadbcadacabcaaaadbcaddbbacddcdabaadcacacdcabaadacadcccdcbbcdabdcdacaacdcdbdacbdbcdcbaddaccabaaaabcadacdaddbcccbcdbadbdddaaabbdbdbcbcdab"); // 431300010

