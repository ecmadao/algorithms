/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string, your task is to count how many palindromic substrings in this string.
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
 *
 * Example:
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 *
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 * Note:
 * The input string length won't exceed 1000.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings_1 = function(s) {
  let base = 0;

  const checkPalindromic = (start, end) => {
    let count = 0;
    while (s[start] === s[end] && start >= 0 && end < s.length) {
      start -= 1;
      end += 1;
      count += 1;
    }
    return count;
  };

  for (let i = 0; i < s.length; i += 1) {
    base += checkPalindromic(i, i);
    base += checkPalindromic(i, i + 1);
  }
  return base;
};

/**
 * @param {string} s
 * @return {number}
 * 动态规划法
 */
var countSubstrings_2 = function(s) {
  let result = s.length
  const tmp = []

  for (let i = 1; i < s.length; i += 1) {
    if (!tmp[i]) tmp[i] = []
    tmp[i][i] = true

    let j = i - 1
    while (j >= 0 && i + (i - j) - 1 <= s.length - 1) {
      if (!tmp[j]) tmp[j] = []
      tmp[j][j] = true

      const l1 = i + (i - j)
      if (l1 <= s.length - 1) {
        tmp[j][l1] = s[j] === s[l1] && (tmp[j + 1][l1 - 1] === undefined ? true : tmp[j + 1][l1 - 1])
      }

      const l2 = i + (i - j) - 1
      tmp[j][l2] = s[j] === s[l2] && (tmp[j + 1][l2 - 1] === undefined ? true : tmp[j + 1][l2 - 1])

      if (tmp[j][l1]) {
          result += 1
      }
      if (tmp[j][l2]) {
          result += 1
      }
      j -= 1
    }
  }

  return result
}
