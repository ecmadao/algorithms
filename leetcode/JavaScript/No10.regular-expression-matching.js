/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Example:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 * 从实现的技术上讲，这道题应该是 Easy 难度，唯一坑人的是要考虑清楚需求：要实现的 match 必须全量匹配才算 true
 * 比如，'abcd' match  'd*'，用正则可以 match 到 d，但是 d !== abcd，故返回 false
 */

/**
 * Test case
 * isMatch("acccc","aa*..*b*") -> true
 * isMatch("ab",".*...*") -> true
 * isMatch("ab",".*...*.") -> false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 *
 * 投机取巧解法
 */
var isMatch_trick = function(s, p) {
  var matchResult = s.match(new RegExp(p, 'g'));
  var result = matchResult ? matchResult[0] === s : false;
  return result;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const couldBeEmpty = (j) => {
    const count = p.length - j;
    if (count % 2 !== 0) return false;

    while (j < p.length) {
      if (p[j + 1] !== '*') return false;
      j += 2;
    }
    return true;
  };

  const match = (i, j) => {
    if (i >= s.length && j >= p.length) return true;
    if (i < s.length && j >= p.length) return false;
    if (i >= s.length) return couldBeEmpty(j);

    const s1 = s[i];
    const s2 = p[j];

    if (s1 === s2 || s2 === '.') {
      if (j < p.length - 1 && p[j + 1] === '*') {
        const r = match(i, j + 2);
        if (r) return true;

        i += 1;
        while (i < s.length && (
          (s2 !== '.' && s[i] === p[j]) ||
          (s2 === '.')
        )) {
          const result = match(i, j + 2);
          if (result) return true;
          i += 1;
        }
        return match(i, j + 2);
      } else {
        return match(i + 1, j + 1);
      }
    } else {
      if (j < p.length - 1 && p[j + 1] === '*') return match(i, j + 2);
      return false;
    }
  };
  return match(0, 0);
};
