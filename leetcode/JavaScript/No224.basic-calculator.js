/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement a basic calculator to evaluate a simple expression string.
 * The expression string may contain open ( and closing parentheses ),
 * the plus + or minus sign -, non-negative integers and empty spaces .
 *
 * Example:
 * Input: "1 + 1"
 * Output: 2
 *
 * Input: " 2-1 + 2 "
 * Output: 3
 *
 * Input: "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 *
 * Note:
 * - You may assume that the given expression is always valid.
 * - Do not use the eval built-in library function.
 *
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  
 * 注意多位数字，例如 11-12
 * 可以假设所给定的表达式都是有效的
 */

const cal = (s, start) => {
  let i = start
  const queue = []

  let preOP = '+'

  while (i < s.length) {
    if (!s[i] || s[i] === ' ') {
      i += 1
      continue
    }
    if (s[i] === '(') {
      const { num, index } = cal(s, i + 1)
      queue.push(preOP === '-' ? -num : num)
      i = index
      continue
    }
    if (s[i] === ')') {
      i += 1
      break
    }
    if (Number.isNaN(parseInt(s[i]))) {
      preOP = s[i]
      i += 1
      continue
    }
    let index = i + 1
    while (!Number.isNaN(parseInt(s[index]))) index += 1
    const num = parseInt(s.slice(i, index))
    queue.push(preOP === '-' ? -num : num)
    i = index
  }

  return {
    index: i,
    num: queue.reduce((n, q) => n + q, 0)
  }
}

/**
* @param {string} s
* @return {number}
*/
var calculate = function(s) {
  const result = cal(s, 0)
  return result.num
}


// Test case
console.log(calculate("(1+(4+5+2)-3)+(6+8)")) // 23
console.log(calculate(" 2-1 + 2 ")) // 3
console.log(calculate(" 2-1 - 2 ")) // -1
console.log(calculate("1 + 1")) // 2
console.log(calculate("(1+(4+5+2)-(3-1))+(6+8)")) // 24
console.log(calculate("123")) // 123
console.log(calculate("1-11")) // -10
console.log(calculate("12-11")) // 1
