/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
 * In one operation, you can choose any character of the string and change it to any other uppercase English character.
 * Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.
 *
 * Note:
 * Both the string's length and k will not exceed 10^4.
 *
 * Example 1:
 * Input:
 * s = "ABAB", k = 2
 * Output:
 * 4
 * Explanation:
 * Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 * Input:
 * s = "AABABBA", k = 1
 * Output:
 * 4
 * Explanation:
 * Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4
 *
 * 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * 滑动窗口 贪心匹配
 */
var characterReplacement_1 = function(s, k) {
  if (!s) return 0

  let i = 0
  let j = 0
  let count = 0
  let maxStr = null
  const map = {}

  while (j < s.length) {
    if (maxStr && s[j] !== maxStr) {
      if (j - i - map[maxStr] === k) {
        count = Math.max(count, j - i)

        map[s[i]] -= 1
        // get max maxStr
        if (j - i > 1 && s[i] === maxStr) {
          maxStr = Object.keys(map).sort((k1, k2) => map[k2] - map[k1])[0]
        } else if (j - i === 1) {
          maxStr = null
        }
        i += 1
        continue
      }
    }

    map[s[j]] = (map[s[j]] || 0) + 1
    if (!maxStr || map[s[j]] > map[maxStr]) maxStr = s[j]
    j += 1
  }

  return Math.max(count, j - i)
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * 优化版本
 */
var characterReplacement_2 = function(s, k) {
  if (!s) return 0

  let i = 0
  let j = 0

  let count = 0
  const map = {}
  let maxCount = 0

  while (j < s.length) {
    map[s[j]] = (map[s[j]] || 0) + 1
    maxCount = Math.max(maxCount, map[s[j]]) // 当前窗口内的最多字符的个数

    while (j - i + 1 - maxCount > k) { // 需要替换的字符个数 = 当前窗口的大小 - 窗口中数量最多的字符的数量
      map[s[i]] -= 1
      i += 1 // 缩小窗口
    }

    count = Math.max(count, j + 1 - i)
    j += 1
  }

  return Math.max(count, j - i)
}
