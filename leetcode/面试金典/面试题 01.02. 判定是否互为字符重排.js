/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 *
 * 示例 1：
 * 输入: s1 = "abc", s2 = "bca"
 * 输出: true
 *
 * 示例 2：
 * 输入: s1 = "abc", s2 = "bad"
 * 输出: false
 *
 * 说明：
 * 1. 0 <= len(s1) <= 100
 * 2. 0 <= len(s2) <= 100
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  const map = s1.split('').reduce((m, str) => {
    m[str] = (m[str] || 0) + 1
    return m
  }, {})
  for (const str of s2) {
    if (!map[str]) return false
    map[str] -= 1
  }
  return true
}
