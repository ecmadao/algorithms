/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Example:
 * Input: 27
 * Output: true
 *
 * Input: 0
 * Output: false
 *
 * Input: 9
 * Output: true
 *
 * Input: 45
 * Output: false
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return Math.log10(n) / Math.log10(3) % 1 === 0
};
