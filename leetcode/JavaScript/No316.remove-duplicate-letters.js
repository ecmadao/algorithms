/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string which contains only lowercase letters,
 * remove duplicate letters so that every letter appears once and only once.
 * You must make sure your result is the smallest in lexicographical order among all possible results.
 *
 * Example 1:
 * Input: "bcabc"
 * Output: "abc"
 *
 * Example 2:
 * Input: "cbacdcbc"
 * Output: "acdb"
 *
 * Note:
 * This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 *
 * 给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。
 * 需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(text) {
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
