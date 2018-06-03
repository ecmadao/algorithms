/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Remove the minimum number of invalid parentheses in order to make the input string valid.
 * Return all possible results.
 *
 * Note:
 * The input string may contain letters other than the parentheses ( and ).
 *
 * Example:
 * Input: "()())()"
 * Output: ["()()()", "(())()"]
 *
 * Input: "(a)())()"
 * Output: ["(a)()()", "(a())()"]
 *
 * Input: ")("
 * Output: [""]
 */


const removeInvalidParentheses = (s) => {
  const checkValidate = (str) => {
    let left = 0;
    let right = 0;
    for (const string of str) {
      if (string === '(') left += 1;
      if (string === ')') {
        right += 1;
        if (right > left) return false;
      }
    }
    return right === left;
  };

  const results = [];
  const tmp = new Set();
  let queue = [s];

  while (true) {
    const tmpQueue = [];
    for (const rawS of queue) {
      if (checkValidate(rawS)) {
        results.push(rawS);
      }
      for (let i = 0; i < rawS.length; i += 1) {
        const nextS = `${rawS.slice(0, i)}${rawS.slice(i + 1)}`;
        if (!tmp.has(nextS)) {
          tmpQueue.push(nextS);
          tmp.add(nextS);
        }
      }
    }
    if (!results.length) {
      queue = tmpQueue;
    } else {
      return results;
    }
  }
};

// Test case
removeInvalidParentheses('()())()');
removeInvalidParentheses(')(');
removeInvalidParentheses('((()()');
removeInvalidParentheses('(()()(');
