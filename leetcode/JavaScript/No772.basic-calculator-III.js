/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement a basic calculator to evaluate a simple expression string.
 * The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
 * The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate results will be in the range of [-2147483648, 2147483647].
 *
 * Examples:
 * "1 + 1" = 2
 * " 6-4 / 2 " = 4
 * "2*(5+5*2)/3+(6/2+8)" = 21
 * "(2+6* 3+5- (3*14/7+2)*5)+3"=-12
 *
 * Note: Do not use the eval built-in library function
 *
 * 实现一个基本的计算器来计算简单的表达式字符串。
 * 表达式字符串可以包含左括号 ( 和右括号 )，加号 + 和减号 -，非负 整数和空格 。
 * 表达式字符串只包含非负整数， +, -, *, / 操作符，左括号 ( ，右括号 )和空格 。整数除法需要向下截断。
 * 可以假定给定的字符串总是有效的。所有的中间结果的范围为 [-2147483648, 2147483647]
 */


const nextNumber = (s, i) => {
  let start = i
  while (s[start] === ' ') start += 1

  if (s[start] === '(') return pureCalculate(s, start + 1)

  let index = start + 1
  while (!Number.isNaN(parseInt(s[index]))) index += 1
  return {
    index,
    num: parseInt(s.slice(i, index))
  }
}

const cal = (n1, n2, op) => {
  switch (op) {
    case '*':
      return n1 * n2
    case '/':
      return n1 / n2 < 0 ? Math.ceil(n1 / n2) : Math.floor(n1 / n2)
  }
}

var pureCalculate = function(s, start) {
  const queue = []
  let i = start

  let preOP = '+'
  while (i < s.length) {
    if (!s[i] || s[i] === ' ') {
      i += 1
      continue
    }

    if (s[i] === '(') {
      const { num, index } = pureCalculate(s, i + 1)
      queue.push(preOP === '-' ? -num : num)
      i = index
      continue
    }
    if (s[i] === ')') {
      i += 1
      break
    }

    if (s[i] === '*' || s[i] === '/') {
      preOP = s[i]
      const next = nextNumber(s, i + 1)
      queue.push(
        cal(queue.pop(), next.num, preOP)
      )
      i = next.index
      continue
    }
    if (s[i] === '+' || s[i] === '-') {
      preOP = s[i]
      i += 1
      continue
    }

    const next = nextNumber(s, i)
    queue.push(preOP === '-' ? -next.num : next.num)
    i = next.index
  }

  return {
    num: queue.reduce((n1, n2) => n1 + n2, 0),
    index: i
  }
}

/**
* @param {string} s
* @return {number}
*/
var calculate = function(s) {
  const result = pureCalculate(s, 0)
  return result.num
}

console.log(
  calculate("(2+6* 3+5- (3*14/7+2)*5)+3")
)