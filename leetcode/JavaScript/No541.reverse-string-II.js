/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string and an integer k,
 * you need to reverse the first k characters for every 2k characters counting from the start of the string.
 * If there are less than k characters left, reverse all of them.
 * If there are less than 2k but greater than or equal to k characters,
 * then reverse the first k characters and left the other as original.
 *
 * Example:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 *
 * Restrictions:
 * The string consists of lower English letters only.
 * Length of the given string and k will in the range [1, 10000]
 *
 * 从字符串首位开始，按照 2k 的长度分为各个子字符串，然后将各个子字符串的前 k 个字母反转，最后拼成一个字符串
 */

var reverseString = function(s) {
  const strs = s.split('');
  let index = 0;
  const mid = (s.length - 1) / 2;
  while (index <= mid) {
    const tmp = strs[index];
    const i = 2 * mid - index;
    strs[index] = strs[i];
    strs[i] = tmp;
    index += 1;
  }
  return strs.join('');
};

/**
* @param {string} s
* @param {number} k
* @return {string}
*/
var reverseStr = function(s, k) {
  let i = 0;
  const strs = [];
  while (i * 2 * k <= s.length - 1) {
    strs.push(
      reverseString(s.slice(i * 2 * k, i * 2 * k + k)),
      s.slice(i * 2 * k + k, (i + 1) * 2 * k)
    );
    i += 1;
  }
  return strs.join('');
};
