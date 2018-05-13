/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const tmp = {};
  for (const s1 of s) {
    tmp[s1] = tmp[s1] ? tmp[s1] + 1 : 1;
  }

  for (const t1 of t) {
    if (!tmp[t1]) return false;
    tmp[t1] -= 1;
    if (tmp[t1] === 0) {
      delete tmp[t1];
    }
  }
  return Object.keys(tmp).length === 0;
};
