/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty string s,
 * you may delete at most one character. Judge whether you can make it a palindrome.
 *
 * Example 1:
 * Input: "aba"
 * Output: True
 *
 * Example 2:
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 *
 * Note:
 * The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串
 */

// ============================================= Solution 1 =============================================

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome_1 = function(s) {
  const maxDelCount = 1;
  const checkStrPalindrome = (str, delCount = 0) => {
    const mid = Math.floor((str.length / 2) - 1);
    let i = 0;
    while (i <= mid) {
      if (str[i] !== str[str.length - 1 - i]) {
        if (delCount >= maxDelCount) return false;
        if (checkStrPalindrome(str.slice(i + 1, str.length - i), 1)) return true;
        if (checkStrPalindrome(str.slice(i, str.length - 1 - i), 1)) return true;
        return false;
      }
      i += 1;
    }
    return true;
  };
  return checkStrPalindrome(s);
};

// ============================================= Solution 2 =============================================

const checkPalindrome = (s, i , j) => {
  while (i < j) {
      if (s[i] !== s[j]) return false
      i += 1
      j -= 1
  }
  return true
}

/**
* @param {string} s
* @return {boolean}
*/
var validPalindrome_2 = function(s) {
  let i = 0

  while (i < s.length / 2) {
    const j = s.length - i - 1
    if (s[i] !== s[j]) {

      if (s[i] === s[j - 1]) {
        if (checkPalindrome(s, i, j - 1)) return true
      }
      if (s[i + 1] === s[j]) {
        if (checkPalindrome(s, i + 1, j)) return true
      }
      return false
    }
    i += 1
  }
  return true
}
