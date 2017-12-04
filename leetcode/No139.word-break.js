/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * You may assume the dictionary does not contain duplicate words.
 *
 * Example:
 * Given
 * s = "leetcode",
 * dict = ["leet", "code"].
 * Return true because "leetcode" can be segmented as "leet code".
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const tmp = {};

  const check = (index) => {
    if (index >= s.length) return true;
    if (tmp[index] !== undefined) return tmp[index];
    for (let i = index; i < s.length; i += 1) {
      if (set.has(s.slice(index, i + 1))) {
        const result = check(i + 1);
        tmp[i + 1] = result;
        if (result) return true;
      }
    }
    tmp[index] = false;
    return false;
  }
  return check(0);
};
