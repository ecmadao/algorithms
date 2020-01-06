/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
 * In other words, one of the first string's permutations is the substring of the second string.
 *
 * Example:
 * Input:s1 = "ab" s2 = "eidbaooo"
 * Output:True
 * Explanation: s2 contains one permutation of s1 ("ba").
 *w
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 *
 * Note:
 * - The input strings only contain lower case letters.
 * - The length of both given strings is in range [1, 10,000].
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false

  const base = s1.split('').reduce((dict, s) => {
    dict[s] = (dict[s] || 0) + 1
    return dict
  }, {})
  let tmp = Object.assign({}, base)

  let count = s1.length
  let j = 0

  while (j < s2.length) {
    if (tmp[s2[j]] === undefined) {
      j += 1
      count = s1.length
      tmp = Object.assign({}, base)
      continue
    } else if (tmp[s2[j]] === 0) {
      tmp = Object.assign({}, base)

      count = s1.length - 1
      tmp[s2[j]] -= 1
      let i = j - 1
      while (i >= 0 && tmp[s2[i]]) {
        tmp[s2[i]] -= 1
        count -= 1
        i -= 1
      }
      j += 1
      continue
    } else {
      tmp[s2[j]] -= 1
      count -= 1
      if (count === 0) return true
      j += 1
    }
  }

  return count === 0
}
