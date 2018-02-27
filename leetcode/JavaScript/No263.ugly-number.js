/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a program to check whether a given number is an ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Example:
 * 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 *
 * Note:
 * 1 is typically treated as an ugly number.
 *
 * 求能够被 2, 3, 5 整除的数，如果能被整除则返回 true
 * （注：1 始终返回 true）
 */

var arr = [2, 3, 5];

var division = function(num) {
  for (var i = 0; i < arr.length; i += 1) {
    var remainder = num % arr[i];
    if (remainder === 0) {
      var number = num / arr[i];
      if (number === 1) return true;
      return division(number);
    }
  }
  return false;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 1) return true;
  if (num === 0) return false;
  return division(num);
};