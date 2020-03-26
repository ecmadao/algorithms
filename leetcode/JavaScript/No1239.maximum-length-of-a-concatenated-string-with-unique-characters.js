/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.
 * Return the maximum possible length of s.
 *
 * Example 1:
 * Input: arr = ["un","iq","ue"]
 * Output: 4
 * Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
 * Maximum length is 4.
 *
 * Example 2:
 * Input: arr = ["cha","r","act","ers"]
 * Output: 6
 * Explanation: Possible solutions are "chaers" and "acters".
 *
 * Example 3:
 * Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
 * Output: 26
 *
 * Constraints:
 * 1. 1 <= arr.length <= 16
 * 2. 1 <= arr[i].length <= 26
 * 3. arr[i] contains only lower case English letters.
 *
 * 给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。
 * 请返回所有可行解 s 中最长长度
 */

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let res = 0
  const dp = []

  const duplicate = (str1, str2) => {
    const cache = new Set(str1.split(''))
    for (const char of str2) {
      if (cache.has(char)) return true
      cache.add(char)
    }
    return false
  }

  for (const str of arr) {
    if (duplicate('', str)) continue
    if (res < str.length) res = str.length
    for (const str2 of dp) {
      if (!duplicate(str2, str)) {
        const newStr = str2 + str
        dp.push(newStr)
        if (res < newStr.length) res = newStr.length
      }
    }
    dp.push(str)
  }

  return res
}
