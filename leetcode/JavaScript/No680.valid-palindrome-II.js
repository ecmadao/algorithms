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
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
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
