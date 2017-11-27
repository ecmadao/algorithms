/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 *
 * Example:
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s || s.length === 1) return true;
  const strs = s.toLowerCase().match(/[a-z|0-9]/g);
  if (!strs || !strs.length || strs.length === 1) return true;
  const str = strs.join('');
  const mid = Math.floor((str.length / 2) - 1);
  let i = 0;
  while (i <= mid) {
    if (str[i] !== str[str.length - 1 - i]) return false;
    i += 1;
  }
  return true;
};
