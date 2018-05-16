/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a range [m, n] where 0 <= m <= n <= 2147483647,
 * return the bitwise AND of all numbers in this range, inclusive.
 *
 * Example:
 * Input: [5,7]
 * Output: 4
 *
 * Input: [0,1]
 * Output: 0
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  if (m === 0 || n === 0) return 0;

  while (m < n) {
    n = n & (n - 1);
    if (n === 0) break;
  }
  return n;
};
