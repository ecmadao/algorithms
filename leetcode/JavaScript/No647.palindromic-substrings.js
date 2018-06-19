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
var countSubstrings = function(s) {
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
