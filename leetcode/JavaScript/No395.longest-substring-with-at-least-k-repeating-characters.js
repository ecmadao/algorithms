/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.
 *
 * Example 1:
 * Input:
 * s = "aaabb", k = 3
 * Output:
 * 3
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 *
 * Example 2:
 * Input:
 * s = "ababbc", k = 2
 * Output:
 * 5
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 *
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * 分治
 */
var longestSubstring = function(s, k) {
  let result = 0
  const map = s.split('').reduce((dict, str) => {
    dict[str] = (dict[str] || 0) + 1
    return dict
  }, {})

  for (const [key, count] of Object.entries(map)) {
    if (count < k) {
      for (const str of s.split(key)) {
        if (!str) continue
        result = Math.max(result, longestSubstring(str, k))
      }
      return result
    }
  }
  return s.length
}
