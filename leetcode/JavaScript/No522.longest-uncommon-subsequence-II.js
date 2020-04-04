/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of strings, you need to find the longest uncommon subsequence among them.
 * The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.
 * A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements.
 * Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.
 * The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence.
 * If the longest uncommon subsequence doesn't exist, return -1.
 *
 * Example 1:
 * Input: "aba", "cdc", "eae"
 * Output: 3
 *
 * Note:
 * 1. All the given strings' lengths will not exceed 10.
 * 2. The length of the given list will be in the range of [2, 50].
 *
 * 给定字符串列表，你需要从它们中找出最长的特殊序列。最长特殊序列定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。
 * 子序列可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。
 * 输入将是一个字符串列表，输出是最长特殊序列的长度。如果最长特殊序列不存在，返回 -1 。
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  strs.sort((s1, s2) => {
    if (s2.length === s1.length) {
      if (s1 < s2) return -1
      if (s1 > s2) return 1
      return 0
    }
    return s2.length - s1.length
  })

  const isSub = (s1, s2) => {
    let i = 0
    let j = 0
    while (i < s1.length) {
      while (j < s2.length && s2[j] !== s1[i]) j += 1
      if (s2[j] !== s1[i]) return false
      i += 1
      j += 1
    }
    return true
  }

  let i = 0
  let max = -1
  while (i < strs.length) {
    while (i + 1 < strs.length && strs[i] === strs[i + 1]) i += 1
    if (strs[i] !== strs[i - 1]) {
      let sub = false
      for (let j = 0; j < i; j += 1) {
        if (strs[j] === strs[j - 1]) continue
        if (isSub(strs[i], strs[j])) {
          sub = true
          break
        }
      }
      if (!sub) {
        max = strs[i].length
        break
      }
    }
    i += 1
  }
  return max
}
