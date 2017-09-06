/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * 简而言之，就是求一个字符串里面不重复字符串的最大长度
 * 例如 pwwkew，从首位开始，p, pw, pww，重复，继续查找: w, wk, wke, wkew, 重复，故最长不重复字符串为 wke，长度为 3
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var maxString = '';
  var string = '';
  var set = new Set();
  for (let i = 0; i < s.length; i += 1) {
    var item = s[i];
    if (!set.has(item)) {
      set.add(item);
      string = string + item;
    } else {
      if (string.length > maxString.length) {
        maxString = string;
      }
      var index = string.indexOf(item);
      string = string.slice(index + 1) + item;
      set = new Set(string.split(''));
    }
  }
  if (string.length > maxString.length) {
    maxString = string;
  }
  return maxString.length;
};

lengthOfLongestSubstring('abcabcbb'); // abc, 3