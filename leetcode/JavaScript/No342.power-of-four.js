/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 *
 * Example:
 * Given num = 16, return true. Given num = 5, return false.
 *
 * Follow up:
 * Could you solve it without loops/recursion?
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return num.toString(2).replace(/^1/, '').split('00').join('') === '';
};
