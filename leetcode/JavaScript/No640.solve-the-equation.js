/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Solve a given equation and return the value of x in the form of string "x=#value".
 * The equation contains only '+', '-' operation, the variable x and its coefficient.
 * If there is no solution for the equation, return "No solution".
 * If there are infinite solutions for the equation, return "Infinite solutions".
 * If there is exactly one solution for the equation, we ensure that the value of x is an integer.
 *
 * Example 1:
 * Input: "x+5-3+x=6+x-2"
 * Output: "x=2"
 *
 * Example 2:
 * Input: "x=x"
 * Output: "Infinite solutions"
 *
 * Example 3:
 * Input: "2x=x"
 * Output: "x=0"
 *
 * Example 4:
 * Input: "2x+3x-6x=x+2"
 * Output: "x=-1"
 *
 * Example 5:
 * Input: "x=x+2"
 * Output: "No solution"
 *
 * 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。
 * 如果方程没有解，请返回“No solution”。
 * 如果方程有无限解，则返回“Infinite solutions”。
 * 如果方程中只有一个解，要保证返回值 x 是一个整数。
 */

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  const calc = (queue) => {
    let res = 0
    for (const x of queue) {
      res += Number(x.slice(0, -1))
    }
    res = (res >= 0 ? '+' : '') + res
    return res + 'x'
  }

  const parser = (str) => {
    let num = 0
    let queue = []
    let i = 0
    let status = '+'

    while (i < str.length) {
      if (/^[+-]$/.test(str[i])) {
        status = str[i]
        i += 1
      }
      const j = i
      while (i < str.length && !/^[+-]$/.test(str[i])) i += 1
      let n = str.slice(j, i)
      if (/x$/.test(n)) {
        queue.push(status + (n.length === 1 ? `1${n}` : n))
      } else {
        n = status === '-' ? -parseInt(n) : parseInt(n)
        num += n
      }
    }

    return [num, calc(queue)]
  }

  const [left, right] = equation.split('=')
  const [n1, x1] = parser(left)
  const [n2, x2] = parser(right)

  const x = calc([
    x1,
    x2[0] === '+' ? `-${x2.slice(1)}` : `+${x2.slice(1)}`
  ])

  if (x[1] === '0') {
    if (n1 === n2) return "Infinite solutions"
    return 'No solution'
  }

  const num = Math.floor((n2 - n1) / Number(x.slice(0, -1)))
  return `x=${num}`
}
