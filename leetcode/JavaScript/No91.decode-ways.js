/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 *
 * Example:
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * The number of ways decoding "12" is 2.
 *
 * 已知我们可以把字母安装上面的表编码成为数字。先给出一个数字（字符串形式），求出不同解码方式的数目
 * 例如，12 可以被解码为 AB 或者 L，即 2 种
 */

/**
 * 思路：
 * 动态规划问题
 * 当处于字符串尾部时，例如位于 123 尾部时，它最后一步可能右 3 解码而来，或者 23 解码
 * 即 decode(s) = decode(s.slice(0, -2)) + decode(s.slice(0, -1))
 * 但是有额外的条件限制，只有当确实可以解码时上式才能成立
 */

var DIC = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
};

// 缓存
var temp = {};

var decode = function(s) {
  var directDecode = DIC[s] ? 1 : 0;
  if (s.length <= 1) return directDecode;
  var splitDecode = decode(s[0]) + decode(s[1]);
  return directDecode + (splitDecode === 2 ? 1 : 0);
};

/**
* @param {string} s
* @return {number}
*/
var numDecodings = function(s) {
  if (temp[s] !== undefined) return temp[s];
  if (s.length <= 2) return decode(s);
  var numA = DIC[s.slice(-1)] ? numDecodings(s.slice(0, -1)) : 0;
  var numB = DIC[s.slice(-2)] ? numDecodings(s.slice(0, -2)) : 0;
  var num = numA + numB;
  temp[s] = num;
  return num;
};
