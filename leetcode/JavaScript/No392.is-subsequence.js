/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s and a string t, check if s is subsequence of t.
 * You may assume that there is only lower case English letters in both s and t.
 * t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Example:
 * s = "abc", t = "ahbgdc"
 * Return true.
 *
 * s = "axc", t = "ahbgdc"
 * Return false.
 *
 * Follow up:
 * If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B,
 * and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * abc
 * aec
 */
var isSubsequence = function(s, t) {
  const tmp = [];

  const dp = (i, j) => {
    if (i >= s.length) return true;
    if (j >= t.length) return false;
    const key = `${i}-${j}`;
    if (tmp[key]) return tmp[key];

    const target = s[i];
    let letter = t[j];

    let result = false;
    if (target === letter) {
      result = dp(i + 1, j + 1);
    }
    if (!result) {
      j += 1;
      letter = t[j];
      while (j < t.length && target !== letter) {
        j += 1;
        letter = t[j];
      }
      if (j === t.length && t[j - 1] !== target) {
        result = false;
      } else {
        result = dp(i + 1, j + 1);
      }
    }

    tmp[key] = result;
    return result;
  };

  return dp(0, 0);
};

// Test case
console.log(isSubsequence('b', 'c')); // false
console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
console.log(isSubsequence('twn', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn')); // true


// Solution 2
// 依次查找每个字母的 index，每次查找时以上一次的结果作为 offset
var isSubsequence_2 = function(s, t) {
  let offset = -1;
  for (const letter of s) {
    offset = t.indexOf(letter, offset + 1);
    if (offset === -1) return false;
  }
  return true;
};
