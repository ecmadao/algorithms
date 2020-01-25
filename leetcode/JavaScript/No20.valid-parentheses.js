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

/**
* @param {string} s
* @return {boolean}
*
* 思路：运用栈
*/
var isValid = function(s) {
  const stack = []
  const BracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (var i = 0; i < s.length; i += 1) {
    var str = s[i]
    if (BracketsMap[str]) {
      if (stack.pop() !== BracketsMap[str]) {
        return false
      }
    } else {
      stack.push(str)
    }
  }
  return stack.length === 0
}
