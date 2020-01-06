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

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!t || !s) return ''
  if (s.match(t)) return t
  let result = null

  const tmp = t.split('').reduce((dict, str) => {
    dict[str] = (dict[str] || 0) + 1
    return dict
  }, {})
  let count = t.length

  let i = -1
  let j = -1
  while (j < s.length && i <= (s.length - t.length)) {
    if (tmp[s[j]] !== undefined && i === -1) {
      i = j
    }

    if (count <= 0) {
      if (!result || j + 1 - i < result.length) {
        result = s.slice(i, j + 1)
      }
      if (tmp[s[i]] !== undefined) tmp[s[i]] += 1
      if (tmp[s[i]] > 0) count += 1
      i += 1
    } else {
      j += 1
      if (tmp[s[j]] !== undefined) {
        tmp[s[j]] -= 1
        if (tmp[s[j]] >= 0) count -= 1
      }
    }
  }

  return result === null ? (!count ? s : '') : result
}

console.log(
  minWindow('ADOBECODEBANC', 'ABC')
)

console.log(
  minWindow('AA', 'AA')
)

console.log(
  minWindow('ABQCDEFGAMBNCDEFG', 'ABCA')
)
