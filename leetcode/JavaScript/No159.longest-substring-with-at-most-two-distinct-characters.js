/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
 *
 * Example 1:
 * Input: "eceba"
 * Output: 3
 * Explanation: t is "ece" which its length is 3.
 *
 * Example 2:
 * Input: "ccaabbb"
 * Output: 5
 * Explanation: t is "aabbb" which its length is 5.
 *
 * 给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t
 * 即子字符串中，不重复的字符最多两种
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let result = 0

  for (let i = 0; i < s.length - result; i += 1) {
    let j = i + 1
    const cache = new Map()
    let tag = false
    cache.set(s[i], i)
    while (j < s.length) {
      if (j - i + s.length - j < result) break
      if (!cache.has(s[j])) {
        if (tag) break
        tag = true
        cache.set(s[j], j)
      }
      j += 1
    }
    result = Math.max(result, j - i)
  }
  return result
}
