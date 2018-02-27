/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 *
 * 给出一个含有括号的字符串，判断其是否正确的闭合
 * 例如，'[](){}' 是正确闭合的，'{[()]}' 也是正确闭合的，但 '[](}' 这样的就不是
 */

var BracketsMap = {
  '(': ')',
  '{': '}',
  '[': ']',
};

/**
* @param {string} s
* @return {boolean}
*
* 思路：运用堆栈
*/
var isValid = function(s) {
  var queue = [];
  var validate = true;
  var leftBrackets = new Set(['(', '[', '{']);
  var rightBrackets = new Set([')', ']', '}']);

  for (var i = 0; i < s.length; i += 1) {
    var str = s[i];
    if (rightBrackets.has(str)) {
      var target = queue.pop();
      if (BracketsMap[target] !== str) {
        validate = false;
        break;
      }
    }
    if (leftBrackets.has(str)) {
      queue.push(str);
    }
  }
  validate = queue.length > 0 ? false : validate;
  return validate;
};