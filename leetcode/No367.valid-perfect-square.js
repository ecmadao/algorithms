/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example:
 * Input: 16
 * Returns: True
 *
 * Input: 14
 * Returns: False
 *
 * 不使用内置的 sqrt 函数，判断一个数是否是完全平方数
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var start = 0;
  var end = num;

  while(start <= end) {
    var center = Math.floor((start + end) / 2);
    var square = center * center;
    if (square < num) {
      start = center + 1;
    } else if (square > num) {
      end = center - 1;
    } else {
      return true;
    }
  }
  return false;
};
