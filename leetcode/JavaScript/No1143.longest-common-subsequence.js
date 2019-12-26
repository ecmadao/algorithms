/**
 * Difficulty:
 * Medium
 *
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 *
 * A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings
 * If there is no common subsequence, return 0.
 *
 * Example 1:
 *
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 * Example 2:
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 * Example 3:
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 * Constraints:
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * The input strings consist of lowercase English characters only.
 */


const getNum = (tmp, i, j) => {
  if (!Array.isArray(tmp[i])) return 0
  return tmp[i][j] || 0
}
/**
* @param {string} text1
* @param {string} text2
* @return {number}
* 动态规划
*/
var longestCommonSubsequence = function(text1, text2) {
  const tmp = []

  for (let i = 0; i < text1.length; i += 1) {
    if (!tmp[i]) tmp[i] = []

    for (let j = 0; j < text2.length; j += 1) {
      if (text1[i] === text2[j]) {
        tmp[i][j] = getNum(tmp, i - 1, j - 1) + 1
      } else {
        tmp[i][j] = Math.max(
          getNum(tmp, i - 1, j),
          getNum(tmp, i,j - 1)
        )
      }
    }
  }

  return tmp[text1.length - 1][text2.length - 1]
}
