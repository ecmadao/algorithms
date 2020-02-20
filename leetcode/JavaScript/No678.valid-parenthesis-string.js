/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:
 * 1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * 2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * 3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * 4. '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 * 5. An empty string is also valid.
 *
 * Example 1:
 * Input: "()"
 * Output: True
 *
 * Example 2:
 * Input: "(*)"
 * Output: True
 *
 * Example 3:
 * Input: "(*))"
 * Output: True
 *
 * Note:
 * The string size will be in the range [1, 100]
 *
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
 * 1. 任何左括号 ( 必须有相应的右括号 )。
 * 2. 任何右括号 ) 必须有相应的左括号 ( 。
 * 3. 左括号 ( 必须在对应的右括号之前 )。
 * 4. * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
 * 5. 一个空字符串也被视为有效字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString_1 = function(s) {
  const queue = []

  for (const str of s) {
    if (str === '(' || str === '*') queue.push(str)

    if (str === ')') {
      if (!queue.length) return false
      let i = queue.length - 1
      while (i >= 0 && queue[i] !== '(') i -= 1
      if (i === -1) i = queue.length - 1
      queue.splice(i, 1)
    }
  }

  if (!queue.length) return true

  let left = 0
  while (queue.length) {
    const str = queue.pop()
    if (str === '*') left -= 1
    if (str === '(') left += 1
    if (left > 0) return false
  }

  return left <= 0
}

/**
 * @param {string} s
 * @return {boolean}
 *
 * 贪心
 * https://leetcode-cn.com/problems/valid-parenthesis-string/solution/c-dpjie-fa-tan-xin-jie-fa-by-da-fei-kai/
 */
var checkValidString_2 = function(s) {
  let left = 0
  let right = 0

  for (const str of s) {
    switch (str) {
      case '(':
        left += 1
        right += 1
        break
      case '*':
        if (left) left -= 1
        right += 1
        break
      case ')':
        if (left) left -= 1
        if (right) {
          right -= 1
        } else {
          return false
        }
    }
  }

  return left <= 0 && right >= 0
}