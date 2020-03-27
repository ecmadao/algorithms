/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string representing an expression of fraction addition and subtraction,
 * you need to return the calculation result in string format.
 * The final result should be irreducible fraction. If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1.
 * So in this case, 2 should be converted to 2/1.
 *
 * Example 1:
 * Input:"-1/2+1/2"
 * Output: "0/1"
 *
 * Example 2:
 * Input:"-1/2+1/2+1/3"
 * Output: "1/3"
 *
 * Example 3:
 * Input:"1/3-1/2"
 * Output: "-1/6"
 *
 * Example 4:
 * Input:"5/3+1/3"
 * Output: "2/1"
 *
 * Note:
 * 1. The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
 * 2. Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
 * 3. The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
 * 4. The number of given fractions will be in the range [1,10].
 * 5. The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.
 *
 * 给定一个表示分数加减运算表达式的字符串，你需要返回一个字符串形式的计算结果。
 * 这个结果应该是不可约分的分数，即最简分数。 如果最终结果是一个整数，例如 2，你需要将它转换成分数形式，其分母为 1。
 * 所以在上述例子中, 2 应该被转换为 2/1。
 */


const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

const calc = (q1, q2) => {
  const [s1, n1, d1] = q1
  const [s2, n2, d2] = q2

  const d = (d1 * d2) / gcd(d1, d2)
  const num1 = (d / d1) * n1
  const num2 = (d / d2) * n2

  let num
  let s

  if (s1 === s2) {
    num = num1 + num2
    s = s1
  } else {
    num = s1 === '-' ? num2 - num1 : num1 - num2
    s = num < 0 ? '-' : '+'
    num = Math.abs(num)
  }

  const g = gcd(num, d)
  if (num === 0) return ['+', 0, 1]
  return [s, num / g, d / g]
}

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const queue = []
  let status = '+'
  let i = 0
  while (i < expression.length) {
    if (/^[+-]$/.test(expression[i])) {
      status = expression[i]
      i += 1
    }
    const j = i
    while (i < expression.length && !/^[+-]$/.test(expression[i])) i += 1

    const nums = expression.slice(j, i).split('/')
    queue.push(
      [status, Number(nums[0]), Number(nums[1])]
    )
    if (queue.length === 2) {
      queue.push(
        calc(queue.pop(), queue.pop())
      )
    }
  }

  const [s, n, d] = queue[0]
  if (s === '+') return n + '/' + d
  return s + n + '/' + d
}
