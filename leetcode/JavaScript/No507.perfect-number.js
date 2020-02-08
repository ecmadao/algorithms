/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
 * Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
 *
 * Example:
 * Input: 28
 * Output: True
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 *
 * Note: The input number n will not exceed 100,000,000. (1e8)
 *
 * 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
 * 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False
 */

/**
 * @param {number} num
 * @return {boolean}
 *
 * 双指针
 */
var checkPerfectNumber = function(num) {
  let target = num - 1
  if (!target) return false

  let i = 2
  let j = num - 1

  while (i <= j) {
    if (i * j > num) {
      j = Math.floor(num / i)
    } else if (i * j < num) {
      i = Math.ceil(num / j)
    } else {
      target -= (i + j)
      i += 1
      j -= 1
    }
  }

  return target === 0
}
