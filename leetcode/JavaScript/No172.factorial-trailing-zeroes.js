/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note:
 * Your solution should be in logarithmic time complexity.
 *
 * 荐：http://blog.csdn.net/tommyzht/article/details/46309563
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;
  let divisor = 5;
  while (n >= divisor) {
    count += Math.floor(n / divisor);
    divisor *= 5;
  }
  return count;
};
