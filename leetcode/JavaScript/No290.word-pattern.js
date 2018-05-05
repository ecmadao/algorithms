/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a pattern and a string str, find if str follows the same pattern.
 * Here follow means a full match,
 * such that there is a bijection between a letter in pattern and a non-empty word in str.
 *
 * Examples:
 * pattern = "abba", str = "dog cat cat dog" should return true.
 * pattern = "abba", str = "dog cat cat fish" should return false.
 * pattern = "aaaa", str = "dog cat cat dog" should return false.
 * pattern = "abba", str = "dog dog dog dog" should return false.
 *
 * Notes:
 * You may assume pattern contains only lowercase letters,
 * and str contains lowercase letters separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const strs = str.split(' ');
  if (pattern.length !== strs.length) return false;

  let index = 0;
  const tmp1 = {};
  const tmp2 = {};
  while (index < pattern.length) {
    const p = pattern[index];
    const s = strs[index];
    if (tmp1[p] && tmp1[p] !== s) return false;
    if (tmp2[s] && tmp2[s] !== p) return false;
    tmp1[p] = s;
    tmp2[s] = p;
    index += 1;
  }
  return true;
};
