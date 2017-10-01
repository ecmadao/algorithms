/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * 用数组存储了一个数，每一位表示该数字的一位。输出该数字加1后的结果，并同样用数组表示
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var remainder = 1;
  var result = [];
  for (var i = digits.length - 1; i >= 0; i -= 1) {
    var sum = digits[i] + remainder;
    var num = sum % 10;
    var remainder = sum >= 10 ? 1 : 0;
    result.unshift(num);
  }
  if (remainder) {
    result.unshift(remainder);
  }
  return result;
};
