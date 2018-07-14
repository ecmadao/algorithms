/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a balanced parentheses string S, compute the score of the string based on the following rule:
 * - () has score 1
 * - AB has score A + B, where A and B are balanced parentheses strings.
 * - (A) has score 2 * A, where A is a balanced parentheses string.
 *
 * Example:
 * Input: "()"
 * Output: 1
 *
 * Input: "(())"
 * Output: 2
 *
 * Input: "()()"
 * Output: 2
 *
 * Input: "(()(()))"
 * Output: 6
 *
 * Note:
 * - S is a balanced parentheses string, containing only ( and ).
 * - 2 <= S.length <= 50
 */

/**
 * @param {string} S
 * @return {number}
 * =========================== Solution1 Recursive ===========================
 */
var scoreOfParentheses_recursive = function(S) {
  let i = 0;
  let step = 0;
  let point = 0;
  const stack = [];

  const getScore = (start) => {
    const stack = [S[start]];
    let i = start + 1;
    let point = 0;
    while (i < S.length && stack.length) {
      const str = S[i];
      if (str === '(') {
        const result = getScore(i);
        i = result.next;
        point += result.point;
      } else {
        let index = i;
        while (stack.length && S[index] === ')' && index < S.length) {
          if (!point) {
            point = 1;
          } else {
            point *= 2;
          }
          stack.pop();
          index += 1;
        }
        i = index;
      }
    }
    return {
      point,
      next: i
    };
  };

  while (i < S.length) {
    const result = getScore(i);
    i = result.next;
    point += result.point;
  }
  return point;
};

/**
 * @param {string} S
 * @return {number}
 * =========================== Solution2 iteration ===========================
 */
var scoreOfParentheses = function(S) {
  let i = 0;
  const stack = [];

  while (i < S.length) {
    const str = S[i];
    if (str === '(') {
      stack.push(str);
    } else {
      let score = 1;
      const pre = stack.pop();
      if (pre !== '(') {
        score = pre * 2;
        stack.pop();
      }
      while (stack.length && stack[stack.length - 1] !== '(') {
        score += stack.pop();
      }
      stack.push(score);
    }
    i += 1;
  }
  return stack.pop();
};


// Test case
console.log(scoreOfParentheses('()(()())')); // 5
console.log(scoreOfParentheses('(())()(()())')); // 7
console.log(scoreOfParentheses('(()())()(()())')); // 9
console.log(scoreOfParentheses('(()(()))')); // 6
console.log(scoreOfParentheses('((()()))')); // 8
console.log(scoreOfParentheses('(((())()))')); // 12
