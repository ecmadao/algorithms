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
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1
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