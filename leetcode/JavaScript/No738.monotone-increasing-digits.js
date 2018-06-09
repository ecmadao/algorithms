/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.
 * (Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)
 *
 * Example:
 * Input: N = 10
 * Output: 9
 *
 * Input: N = 1234
 * Output: 1234
 *
 * Input: N = 332
 * Output: 299
 *
 * Note: N is an integer in the range [0, 10^9].
 */

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  const STR = String(N);

  let i = STR.length - 2;
  let queue = [STR[i + 1]];
  while (i >= 0) {
    const str = STR[i];
    if (str <= queue[0]) {
      queue.unshift(str);
    } else {
      const base = Number(str) - 1;
      let start = 0;
      while (start < queue.length) {
        queue[start] = 9;
        start += 1;
      }
      queue.unshift(base);
    }
    i -= 1;
  }
  return Number(queue.join(''));
};

monotoneIncreasingDigits(8);
monotoneIncreasingDigits(10);
monotoneIncreasingDigits(20);
monotoneIncreasingDigits(21);
monotoneIncreasingDigits(332);
monotoneIncreasingDigits(826491235832);
