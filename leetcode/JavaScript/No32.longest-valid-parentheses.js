/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string containing just the characters '(' and ')',
 * find the length of the longest valid (well-formed) parentheses substring
 *
 * Example:
 * For "(()", the longest valid parentheses substring is "()", which has length = 2.
 * Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
 *
 * 从由括号组成的字符串中找到合法的最长的字符串
 * 例如：
 * s -> ')()())((()))', longestValidParentheses -> '((()))'
 * s -> '))))())()()(()', longestValidParentheses -> '()()'
 */

/*
 * 思路：
 * 类似第 20 题
 */

var LeftBrackets = new Set(['(', '[', '{']);
var RightBrackets = new Set([')', ']', '}']);

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var queue = [];
  var longestParenthesesLength = 0;
  var left = -1;

  for (var i = 0; i < s.length; i += 1) {
    var str = s[i];
    if (RightBrackets.has(str)) {
      if (!queue.length) {
        left = i;
      } else {
        queue.pop();
        var lastIndex = queue.length ? queue[queue.length - 1] : left;
        var length = i - lastIndex;
        if (length > longestParenthesesLength) {
          longestParenthesesLength = length;
        }
      }
    }
    if (LeftBrackets.has(str)) {
      queue.push(i);
    }
  }
  return longestParenthesesLength;
};
