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
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome_1 = function(s) {
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

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome_2 = function(s) {
  let i = 0
  let j = s.length - 1

  while (i < j) {
    while (i < s.length && !/[A-Za-z0-9]/.test(s[i])) i += 1
    while (j >= 0 && !/[A-Za-z0-9]/.test(s[j])) j -= 1

    if (i >= j) break

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
    i += 1
    j -= 1
  }
  return true
}
