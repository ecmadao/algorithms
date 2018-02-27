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
 *
 * 判断一个单词是否可以利用给定数组中的各元素进行截断。数组内元素没有重复，但可以重复使用
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
    if (tmp[index] !== undefined) return tmp[index];
    if (index >= s.length) return true;
    for (let i = index; i < s.length; i += 1) {
      if (set.has(s.slice(index, i + 1))) {
        tmp[i + 1] = check(i + 1);
        if (tmp[i + 1]) {
          return true;
        }
      }
    }
    return false;
  };
  return check(0);
};
