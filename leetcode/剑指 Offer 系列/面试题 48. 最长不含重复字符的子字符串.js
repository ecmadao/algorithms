/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 *
 * 示例 1:
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 示例 2:
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 * 示例 3:
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 * 提示：
 * s.length <= 40000
 * 注意：本题与主站 3 题相同：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0
  let j = 0
  let res = 0
  const cache = new Map()

  while (j < s.length) {
    const str = s[j]
    if (cache.has(str)) {
      res = Math.max(res, j - i)
      const index = cache.get(str)
      while (i <= index) {
        cache.delete(s[i])
        i += 1
      }
    }
    cache.set(str, j)
    j += 1
  }
  return Math.max(res, j - i)
}
