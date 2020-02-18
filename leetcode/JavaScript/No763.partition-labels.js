/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A string S of lowercase letters is given.
 * We want to partition this string into as many parts as possible so that each letter appears in at most one part,
 * and return a list of integers representing the size of these parts.
 *
 * Example 1:
 * Input: S = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 *
 * Note:
 * 1. S will have length in range [1, 500].
 * 2. S will consist of lowercase letters ('a' to 'z') only.
 *
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const map = S.split('').reduce((dict, s, i) => {
    dict[s] = i
    return dict
  }, {})

  let i = 0
  const result = []

  while (i < S.length) {
    const start = i
    let j = map[S[i]]

    while (i < j) {
      j = Math.max(j, map[S[i]])
      i += 1
    }
    result.push(j - start + 1)
    i += 1
  }
  return result
}
