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
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
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
