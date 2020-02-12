/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 *
 * Example 1:
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 *
 * Example 2:
 * Input: "aba"
 * Output: False
 *
 * Example 3:
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern_1 = function(s) {
  let j = 0

  while (j < s.length / 2) {
    const tmp = s.split(s.slice(0, j + 1))
    const set = new Set(tmp)
    if (tmp.length > 2 && set.size === 1 && set.has('')) return true
    j += 1
  }
  return false
}

/**
 * @param {string} s
 * @return {boolean}
 *
 * 假设母串 S 是由子串 s 重复 N 次而成，
 * 则 S + S 则有子串 s 重复 2N 次，
 * 现在 S = Ns，S + S = 2Ns
 * 因此 S 在 (S+S)[1:-1] 中必出现一次以上
 */
var repeatedSubstringPattern_2 = function(s) {
  return `${s}${s}`.slice(1, -1).indexOf(s) !== -1
}
