/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string, determine if a permutation of the string could form a palindrome.
 *
 * Example 1:
 * Input: "code"
 * Output: false
 *
 * Example 2:
 * Input: "aab"
 * Output: true
 *
 * Example 3:
 * Input: "carerac"
 * Output: true
 *
 * 给定一个字符串，判断该字符串中是否可以通过重新排列组合，形成一个回文字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const dict = s.split('').reduce((map, str) => {
    map[str] = (map[str] || 0) + 1
    return map
  }, {})

  let odd = false
  for (const count of Object.values(dict)) {
    if (count % 2 === 1) {
      if (odd) return false
      odd = true
    }
  }
  return true
}
