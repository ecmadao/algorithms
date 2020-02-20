/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 *
 * Examples:
 * ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 * ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 *
 * 计算 “逆波兰表示法” 的结果。
 * 逆波兰表示法：https://zh.wikipedia.org/wiki/%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E7%A4%BA%E6%B3%95
 * 这道题立意是好的，逆波兰也很巧妙，但题目完全没有说清楚当计算出小数的时候如何处理
 *
 * 思路：
 * 用一个栈保存数字，遇见操作符就从栈中取出两个数字进行计算，完成后再把结果入栈
 */

const cal = (num1, num2, operation) => {
  switch (operation) {
    case '/':
      return num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2);
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

/**
* @param {string[]} tokens
* @return {number}
*/
var evalRPN = function(tokens) {
  if (!tokens.length) return 0;
  const numbers = [];
  while (tokens.length) {
    const item = tokens.shift();
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      const num2 = Number(numbers.pop());
      const num1 = Number(numbers.pop());
      const num = cal(num1, num2, item);
      numbers.push(num);
    }
  }
  return Number(numbers[0]);
};


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const isOp = s => s === '+' || s === '-' || s === '*' || s === '/'
  const cal = (n1, n2, op) => {
    switch (op) {
      case '+':
        return n1 + n2
      case '-':
        return n1 - n2
      case '*':
        return n1 * n2
      case '/':
        return (n1 / n2) < 0 ? Math.ceil(n1 / n2) : Math.floor(n1 / n2)
    }
  }

  let i = 0
  while (tokens.length >= 3) {
    while (!isOp(tokens[i]) && i < tokens.length) i += 1
    if (i >= tokens.length) break

    tokens.splice(
      i - 2,
      3,
      cal(Number(tokens[i - 2]), Number(tokens[i - 1]), tokens[i])
    )
    i = i - 2 + 1
  }
  return tokens.shift()
}