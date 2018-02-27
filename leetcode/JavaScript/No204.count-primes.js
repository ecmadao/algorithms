/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * 计算出小于 n 的所有质数的个数
 */

var isPrimes = function(num) {
  var result = true;
  var i = 2;
  var max = Math.sqrt(num);
  while (i <= max) {
    if (num % i === 0) {
      result = false;
      break;
    }
    i += 1;
  }
  return result;
};

/**
* @param {number} n
* @return {number}
*/
var countPrimes = function(n) {
  var i = 2;
  var count = 0;
  while (i < n) {
    if (isPrimes(2)) count += 1;
    i += 1;
  }
  return count;
};
