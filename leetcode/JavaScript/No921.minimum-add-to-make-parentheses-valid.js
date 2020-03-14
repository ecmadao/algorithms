/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.
 * Formally, a parentheses string is valid if and only if:
 * 1. It is the empty string, or
 * 2. It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * 3. It can be written as (A), where A is a valid string.
 *
 * Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
 *
 * Example 1:
 * Input: "())"
 * Output: 1
 *
 * Example 2:
 * Input: "((("
 * Output: 3
 *
 * Example 3:
 * Input: "()"
 * Output: 0
 *
 * Example 4:
 * Input: "()))(("
 * Output: 4
 *
 * Note:
 * 1. S.length <= 1000
 * 2. S only consists of '(' and ')' characters.
 *
 * 给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。
 * 从形式上讲，只有满足下面几点之一，括号字符串才是有效的：
 * 1. 它是一个空字符串，或者
 * 2. 它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
 * 3. 它可以被写作 (A)，其中 A 是有效字符串。
 * 给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。
 */

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let count = 0
  const queue = []
  for (const str of S) {
    if (str === '(') {
      queue.push(str)
    } else {
      if (queue.length) {
        queue.pop()
      } else {
        count += 1
      }
    }
  }
  return queue.length + count
}
