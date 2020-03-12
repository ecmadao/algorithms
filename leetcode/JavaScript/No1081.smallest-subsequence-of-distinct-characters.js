/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Return the lexicographically smallest subsequence of text that contains all the distinct characters of text exactly once.
 *
 * Example 1:
 * Input: "cdadabcc"
 * Output: "adbc"
 *
 * Example 2:
 * Input: "abcd"
 * Output: "abcd"
 *
 * Example 3:
 * Input: "ecbacba"
 * Output: "eacb"
 *
 * Example 4:
 * Input: "leetcode"
 * Output: "letcod"
 *
 * Constraints:
 * 1. 1 <= text.length <= 1000
 * 2. text consists of lowercase English letters.
 *
 * Note:
 * This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/
 *
 * 返回字符串 text 中按字典序排列最小的子序列，该子序列包含 text 中所有不同字符一次
 */

/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
  const cache = {}
  for (let i = 0; i < text.length; i += 1) {
    const str = text[i]
    if (!cache[str]) cache[str] = []
    cache[str].push(i)
  }
  const res = []
  const used = {}

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    if (used[char]) continue

    while (res.length && char < res[res.length - 1]) {
      const str = res[res.length - 1]
      const indexes = cache[str]
      if (!indexes.length || indexes[indexes.length - 1] < i) break
      used[str] = false
      res.pop()
    }
    used[char] = true
    res.push(char)
    cache[char].shift()
  }

  return res.join('')
}
