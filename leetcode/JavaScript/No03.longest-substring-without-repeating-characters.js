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
var lengthOfLongestSubstring_1 = function(s) {
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

/* ================= 优化版本 ================= */
/**
 * @param {string} s
 * @return {number}
 * 遍历数组，并以值为键，记录其索引和子字符串起始位置 start
 * 遇见重复的元素后（当前索引为 i，重复元素的索引为 index），比较 index - start, i - start, i - index
 * 取最长，并更新 start
 */
var lengthOfLongestSubstring_2 = function(s) {
  const tmp = {}
  let start = 0
  let len = 0
  let max = 0

  for (let i = 0; i < s.length; i += 1) {
    if (tmp[s[i]] === undefined || tmp[s[i]] < start) {
      len += 1
    } else {
      max = Math.max(max, i - start)
      start = tmp[s[i]] + 1
      len = i - start + 1
    }
    tmp[s[i]] = i
  }
  return Math.max(len, max)
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_3 = function(s) {
  let result = 0
  let start = 0
  let tmpResult = 0
  const tmp = {}

  for (let i = 0; i < s.length; i += 1) {
    if (tmp[s[i]] !== undefined) {
      let index = start
      start = tmp[s[i]] + 1
      while (index < start) {
        delete tmp[s[index]]
        index += 1
      }
      tmpResult = i + 1 - start
    } else {
      tmpResult += 1
    }

    if (result < tmpResult) result = tmpResult

    tmp[s[i]] = i
  }
  return result
}

// Test case
console.log(
  lengthOfLongestSubstring_3('abcabcbb') // 3
)
console.log(
  lengthOfLongestSubstring_3('bbbbb') // 1
)
console.log(
  lengthOfLongestSubstring_3('bacdgerbjdleituwsbbswueyritolb') // 11
)
console.log(
  lengthOfLongestSubstring_3('pwwkew') // 3
)
console.log(
  lengthOfLongestSubstring_3(' ') // 1
)
console.log(
  lengthOfLongestSubstring_3('tmmzuxt') // 5
)
console.log(
  lengthOfLongestSubstring_3('aab') // 2
)