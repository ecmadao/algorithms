/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 *
 * Example:
 * Given a = 1 and b = 2, return 3.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let result = a;

  while (b) {
    result = a ^ b;
    b = (a & b) << 1;
    a = result;
  }
  return result;
};
