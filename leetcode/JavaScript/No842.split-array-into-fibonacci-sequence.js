/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].
 *
 * Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:
 * 1. 0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
 * 2. F.length >= 3;
 * 3. and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
 *
 * Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.
 * Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.
 *
 * Example:
 * Input: "123456579"
 * Output: [123,456,579]
 *
 * Input: "11235813"
 * Output: [1,1,2,3,5,8,13]
 *
 * Input: "112358130"
 * Output: []
 * Explanation: The task is impossible.
 *
 * Input: "0123"
 * Output: []
 * Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.
 *
 * Input: "1101111"
 * Output: [110, 1, 111]
 * Explanation: The output [11, 0, 11, 11] would also be accepted.
 *
 * Note:
 * 1. 1 <= S.length <= 200
 * 2. S contains only digits.
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  const result = [];
  if (S.length <= 2) return result;

  const MAX = Math.pow(2, 31) - 1;

  const checkValidate = (pre, start) => {
    let i = start;
    while (i < S.length) {
      const number = Number(S.slice(start, i + 1));
      if (number > MAX || pre + number > MAX) return false;
      const str = String(pre + number);
      const remain = S.slice(i + 1);

      if (str.length > remain.length || Number(remain) < pre + number) {
        return false;
      }
      if (S.slice(i + 1).startsWith(str)) {
        result.push(number);

        if (str === remain) {
          result.push(Number(remain));
          return true;
        }
        const check = checkValidate(number, i + 1);
        if (check) return true;
        result.pop();
      }
      if (S[i] === '0' && S[start] === '0') return false;
      i += 1;
    }
    return false;
  };

  if (S[0] === '0') {
    result.push(0);
    if (!checkValidate(0, 1)) result.pop();
    return result;
  }

  for (let i = 0; i < S.length; i += 1) {
    const number = Number(S.slice(0, i + 1));
    result.push(number);
    if (checkValidate(number, i + 1)) return result;
    result.pop();
  }
  return result;
};

console.log(splitIntoFibonacci('111'));
console.log(splitIntoFibonacci('112'));
console.log(splitIntoFibonacci('1023'));
console.log(splitIntoFibonacci('011235'));
console.log(splitIntoFibonacci('101'));
console.log(splitIntoFibonacci('199100199'));
console.log(splitIntoFibonacci('112358'));
console.log(splitIntoFibonacci('199100199'));
console.log(splitIntoFibonacci('539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511'));
