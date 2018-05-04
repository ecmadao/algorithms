/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character but a character may map to itself.
 *
 * Example:
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Input: s = "paper", t = "title"
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;

  const tmp = {
    s: {},
    t: {}
  };
  let i = 0;
  while (i < s.length) {
    const s1 = s[i];
    const t1 = t[i];
    if (!tmp.s[s1]) tmp.s[s1] = [];
    if (!tmp.t[t1]) tmp.t[t1] = [];

    tmp.s[s1].push(i);
    tmp.t[t1].push(i);

    if (tmp.s[s1].join(',') !== tmp.t[t1].join(',')) return false;
    i += 1;
  }
  return true;
};
