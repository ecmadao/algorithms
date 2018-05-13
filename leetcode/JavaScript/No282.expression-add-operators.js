/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string that contains only digits 0-9 and a target value,
 * return all possibilities to add binary operators (not unary) +, -, or *
 * between the digits so they evaluate to the target value.
 *
 * Example:
 * Input: num = "123", target = 6
 * Output: ["1+2+3", "1*2*3"]
 *
 * Input: num = "232", target = 8
 * Output: ["2*3+2", "2+3*2"]
 *
 * Input: num = "105", target = 5
 * Output: ["1*0+5","10-5"]
 *
 * Input: num = "00", target = 0
 * Output: ["0+0", "0-0", "0*0"]
 *
 * Input: num = "3456237490", target = 9191
 * Output: []
 *
 * 思路：DFS
 */

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const OP = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
  };
  const results = [];

  const find = (numStr, queue, cur, pre) => {
    if (!numStr && cur === target) {
      results.push(queue.join(''));
      return;
    }

    for (let i = 0; i < numStr.length; i += 1) {
      const number = parseInt(numStr.slice(0, i + 1));
      const next = numStr.slice(i + 1);

      if (queue.length === 0) {
        find(next, [number], number, number);
      } else {
        // +
        queue.push('+', number);
        find(next, queue, cur + number, number);
        queue.pop();
        queue.pop();

        // -
        queue.push('-', number);
        find(next, queue, cur - number, number);
        queue.pop();
        queue.pop();

        // *
        let index = queue.length - 2;
        while (index >= 1 && queue[index] === '*') {
          index -= 2;
        }
        const op = index >= 1 ? queue[index] : '+';
        const breforeProduct = op === '-' ? cur + pre : cur - pre;
        queue.push('*', number);
        find(next, queue, OP[op](breforeProduct, pre * number), pre * number);
        queue.pop();
        queue.pop();
      }

      if (numStr[0] === '0') break;
    }
  };

  find(num, [], null, null);
  return results;
};
