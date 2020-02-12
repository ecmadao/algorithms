/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string which consists of lowercase or uppercase letters,
 * find the length of the longest palindromes that can be built with those letters.
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *
 * Note:
 * Assume the length of given string will not exceed 1,010.
 *
 * Example:
 * Input:
 * "abccccdd"
 * Output:
 * 7
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 注意:
 * 假设字符串的长度不会超过 1010
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome_1 = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    const str = s[i];
    map.set(str, map.has(str) ? map.get(str) + 1 : 1);
  }

  let result = 0;
  let odd = 0;
  for (let val of map.values()) {
    if (val % 2 === 0) {
      result += val;
    } else {
      odd = 1;
      result += val - 1;
    }
  }
  result += odd;
  return result;
};

/**
 * @param {string} s
 * @return {number}
 *
 * 统计字符个数：
 * 偶数个数的字符可全部参与构造回文
 * 奇数个数的字符，偶数部分可参与构造回文
 */
var longestPalindrome_2 = function(s) {
  const dict = s.split('').reduce((map, str) => {
    map[str] = (map[str] || 0) + 1
    return map
  }, {})

  let len = 0
  let hasOdd = false
  for (const count of Object.values(dict)) {
    if (count % 2 === 0) {
      len += count
    } else {
      hasOdd = true
      len += (count - 1)
    }
  }
  return len + (hasOdd ? 1 : 0)
}
