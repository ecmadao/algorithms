/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a function that takes a string as input and reverse only the vowels of a string.
 *
 * Example 1:
 * Input: "hello"
 * Output: "holle"
 *
 * Example 2:
 * Input: "leetcode"
 * Output: "leotcede"
 *
 * Note:
 * The vowels does not include the letter "y".
 *
 * 反转字符串中的元音字母
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const target = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])

  let result = s.split('')
  let i = 0
  let j = s.length - 1
  while (i < j) {
    const si = s[i]
    const sj = s[j]
    if (target.has(si) && target.has(sj)) {
      result[i] = sj
      result[j] = si
      i += 1
      j -= 1
    } else if (target.has(si) && !target.has(sj)) {
      j -= 1
    } else if (!target.has(si) && target.has(sj)) {
      i += 1
    } else {
      i += 1
      j -= 1
    }
  }

  return result.join('')
}
