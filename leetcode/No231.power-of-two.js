/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer, write a function to determine if it is a power of two.
 *
 * 判断一个数是不是 2 的 n 次方
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  while(n >= 2) {
    n = n / 2;
    if (n % 1 !== 0) return false;
  }
  return n === 1;
};

/**
 * More quick func
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) return true
  if (n % 2 !== 0) return false
  return n > 1 && isPowerOfTwo(n / 2)
};
