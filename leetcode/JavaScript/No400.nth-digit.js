/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
 *
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n < 231).
 *
 * Example 1:
 * Input: 3
 * Output: 3
 *
 * Example 2:
 * Input: 11
 * Output: 0
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
 *
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n <= 9) return n
  // 1: 1-9, 9 - 1 + 1 = 9
  // 2: 10-99, 99 - 10 + 1 = 90 个
  // 3: 100-999, 999 - 100 + 1 = 900
  // 4: 1000-9999, 9000
  let base = 9
  let bit = 1
  // 首先找到这个数字对应的数是几位数，用 bit 表示
  // 之后 n 就代表 bit 位数中的第几个数
  while (n > base * bit) {
    n -= (base * bit)
    bit += 1
    base *= 10
  }

  let number = Math.pow(10, bit - 1)
  const index = n % bit
  number += Math.floor(n / bit)
  if (index === 0) {
    return `${number - 1}`.slice(-1)[0]
  }
  return `${number}`[index - 1]
}
