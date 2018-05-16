/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an integer n,
 * count the total number of digit 1 appearing in all non-negative integers less than or equal to n.
 *
 * Example:
 * Input: 13
 * Output: 6
 * Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  if (n < 1) return 0;
  if (n < 10) return 1;
  if (n < 20) return 1 + (n % 10) + 1 + (n % 10 < 1 ? 0 : 1);
  if (n < 100) return 12 + Math.floor(n / 10) - 2 + countDigitOne(n % 10);

  const length = n.toString().length;
  const base = Math.pow(10, length - 1);
  const num = Math.floor(n / base);
  if (num === 1) {
    return (n % base) + 1 + countDigitOne(n % base) + countDigitOne(base - 1);
  } else {
    return base + countDigitOne(n % base) + (num) * countDigitOne(base - 1);
  }
};
