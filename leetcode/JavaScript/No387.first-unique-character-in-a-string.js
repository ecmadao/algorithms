/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string, find the first non-repeating character in it and return it's index.
 * If it doesn't exist, return -1.
 *
 * Example:
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode",
 * return 2.
 *
 * Note:
 * You may assume the string contain only lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const set = new Set(s.split(''));
  let index = -1;
  for (let str of set.keys()) {
    const ss = s.split(str);
    if (ss.length <= 2) {
      index = ss[0].length;
      break;
    }
  }
  return index;
};