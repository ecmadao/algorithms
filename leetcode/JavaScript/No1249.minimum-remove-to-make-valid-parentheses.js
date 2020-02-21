/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s of '(' , ')' and lowercase English characters.
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 *
 * Formally, a parentheses string is valid if and only if:
 * 1. It is the empty string, contains only lowercase characters, or
 * 2. It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * 3. It can be written as (A), where A is a valid string.
 *
 * Example 1:
 * Input: s = "lee(t(c)o)de)"
 * Output: "lee(t(c)o)de"
 * Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
 *
 * Example 2:
 * Input: s = "a)b(c)d"
 * Output: "ab(c)d"
 *
 * Example 3:
 * Input: s = "))(("
 * Output: ""
 * Explanation: An empty string is also valid.
 *
 * Example 4:
 * Input: s = "(a(b(c)d)"
 * Output: "a(b(c)d)"
 *
 * Constraints:
 * 1. 1 <= s.length <= 10^5
 * 2. s[i] is one of  '(' , ')' and lowercase English letters.
 *
 * 给你一个由 '('、')' 和小写字母组成的字符串 s。
 * 你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
 * 请返回任意一个合法字符串。
 * 有效「括号字符串」应当符合以下 任意一条 要求：
 * 1. 空字符串或只包含小写字母的字符串
 * 2. 可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
 * 3. 可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  const removed = []
  const queue = []

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      queue.push(i)
    } else if (s[i] === ')') {
      if (!queue.length) {
        removed.push(i)
      } else {
        queue.pop()
      }
    }
  }

  const cache = new Set([...removed, ...queue])
  return s.split('').filter((_, i) => !cache.has(i)).join('')
}
