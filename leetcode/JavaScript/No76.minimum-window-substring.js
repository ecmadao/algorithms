/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string S and a string T,
 * find the minimum window in S which will contain all the characters in T in complexity O(n).
 *
 * Example:
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * Minimum window is "BANC".
 *
 * S = "aa"
 * T = "aa"
 * Minimum window is "aa".
 *
 * 给定一个母串 s 和一个模板串 t ，求一个 s 的最小子串使其包含 t 中所有的字符。
 */

/**
 * 思路：
 * 双指针
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!t || !s) return '';
  if (s.match(t)) return t;

  var tmp = {};
  var check = {};
  for (var i = 0; i < t.length; i += 1) {
    var str = t[i];
    check[str] = true;
    tmp[str] = tmp[str] === undefined ? 1 : tmp[str] + 1;
  }

  var count = t.length;
  var start = 0;
  var end = -1;
  var indexs = [];
  var result = '';

  while (end < s.length && start <= (s.length - t.length)) {
    if (count) {
      end += 1;
      if (check[s[end]]) {
        tmp[s[end]] -= 1;
        if (tmp[s[end]] >= 0) count -= 1;
      }
    } else {
      if (!result || result.length > end - start + 1) {
        result = s.slice(start, end + 1);
      }
      if (check[s[start]]) {
        tmp[s[start]] += 1;
        if (tmp[s[start]] > 0) count += 1;
      }
      start += 1;
    }
  }

  return result;
};