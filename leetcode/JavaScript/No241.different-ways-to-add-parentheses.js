/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string of numbers and operators,
 * return all possible results from computing all the different possible ways to group numbers and operators.
 * The valid operators are +, - and *.
 *
 * Example:
 * Input: "2-1-1"
 * Output: [0, 2]
 * Explanation:
 * ((2-1)-1) = 0
 * (2-(1-1)) = 2
 *
 * Input: "2*3-4*5"
 * Output: [-34, -14, -10, -10, 10]
 * Explanation:
 * (2*(3-(4*5))) = -34
 * ((2*3)-(4*5)) = -14
 * ((2*(3-4))*5) = -10
 * (2*((3-4)*5)) = -10
 * (((2*3)-4)*5) = 10
 */

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const inputs = [];
  const isNum = item => item !== ' ' && item !== '*' && item !== '-' && item !== '+';
  const OP = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
  };

  let i = 0;
  while (i < input.length) {
    const item = input[i];
    if (item === ' ') {
      i += 1;
      continue;
    }
    if (item === '+' || item === '-' || item === '*') {
      inputs.push(item);
      i += 1;
      continue;
    }

    let num = parseInt(item, 10);
    i += 1;
    while (isNum(input[i]) && i < input.length) {
      num = num * 10 + parseInt(input[i], 10);
      i += 1;
    }
    inputs.push(num);
  }

  const compute = (arr) => {
    if (arr.length === 1) return arr;

    const r = [];
    for (let index = 1; index < arr.length - 1; index += 1) {
      const item = arr[index];
      if (!isNum(item)) {
        const lefts = compute(arr.slice(0, index));
        const rights = compute(arr.slice(index + 1));

        for (const left of lefts) {
          for (const right of rights) {
            r.push(OP[item](left, right));
          }
        }
      }
    }
    return r;
  };

  return compute(inputs);
};

// Test case
diffWaysToCompute("1+4+15 + 2- 13+ 6+ 8");
diffWaysToCompute("2*3-4*5");
diffWaysToCompute("2*3-4*5+2-12");
