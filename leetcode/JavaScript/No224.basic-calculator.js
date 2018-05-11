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
 * 求 String 类型计算表达式的值。式中只有 (, ), +, - 和正数，可能有空白字符
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const chars = s.split('');
  const queue = [];

  const getNumber = () => {
    let result = queue.pop();
    let i = 1;
    while (queue.length) {
      const pre = queue.pop();
      if (!isNaN(pre)) {
        result = pre * Math.pow(10, i) + result;
        i += 1;
        continue;
      } else {
        queue.push(pre);
        break;
      }
    }
    return result;
  };

  const isNum = char => char !== '+' && char !== '-' && char !== '(';

  const cal = () => {
    let result = getNumber();
    let op = queue.pop();

    while (op !== '(' && queue.length) {
      let num1 = result;
      if (op === '-') num1 *= -1;
      let num2 = getNumber();

      let preOp = queue.length ? queue.pop() : null;
      if (preOp !== null) {
        if (preOp === '-') {
          num2 *= -1;
          preOp = '+';
        }
        queue.push(preOp);
      }
      result = num1 + num2;
      op = queue.pop();
    }
    queue.push(result);
  };

  for (const char of chars) {
    if (!char || char === ' ') continue;
    if (char !== ')') {
      queue.push(
        isNum(char) ? parseInt(char, 10) : char
      );
      continue;
    }
    cal();
  }

  if (queue.length > 1) cal();
  return queue[0];
};


// Test case
console.log(calculate("(1+(4+5+2)-3)+(6+8)")) // 23
console.log(calculate(" 2-1 + 2 ")) // 3
console.log(calculate(" 2-1 - 2 ")) // -1
console.log(calculate("1 + 1")) // 2
console.log(calculate("(1+(4+5+2)-(3-1))+(6+8)")) // 24
console.log(calculate("123")) // 123
console.log(calculate("1-11")) // -10
console.log(calculate("12-11")) // 1
