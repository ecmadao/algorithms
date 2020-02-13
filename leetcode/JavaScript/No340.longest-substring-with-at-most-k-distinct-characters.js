/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string, find the length of the longest substring T that contains at most k distinct characters.
 *
 * Example 1:
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: T is "ece" which its length is 3.
 *
 * Example 2:
 * Input: s = "aa", k = 1
 * Output: 2
 * Explanation: T is "aa" which its length is 2
 *
 * 给定一个字符串 s ，找出 至多 包含 k 个不同字符的最长子串 T
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * 滑动窗口
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (!k) return 0
  const map = {}

  let result = 0
  let i = 0
  let j = 0
  while (j <= s.length) {
    if (j === s.length) break

    if (!map[s[j]]) {
      if (!k) {
        result = Math.max(result, j - i)
        map[s[i]] -= 1
        if (!map[s[i]]) k += 1
        i += 1
      } else {
        map[s[j]] = 1
        k -= 1
        j += 1
      }
    } else {
      map[s[j]] += 1
      j += 1
    }
  }

  return Math.max(result, j - i)
}
