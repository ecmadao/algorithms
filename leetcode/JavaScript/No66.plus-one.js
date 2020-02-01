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
  let num = 1
  let index = digits.length - 1

  while (num && index >= 0) {
    const sum = digits[index] + num
    digits[index] = sum % 10
    num = sum >= 10 ? 1 : 0
    index -= 1
  }

  if (num) digits.unshift(num)
  return digits
}
