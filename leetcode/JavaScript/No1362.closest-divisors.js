/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer num, find the closest two integers in absolute difference whose product equals num + 1 or num + 2.
 * Return the two integers in any order.
 *
 * Example 1:
 * Input: num = 8
 * Output: [3,3]
 * Explanation:
 * For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10,
 * the closest divisors are 2 & 5, hence 3 & 3 is chosen.
 *
 * Example 2:
 * Input: num = 123
 * Output: [5,25]
 *
 * Example 3:
 * Input: num = 999
 * Output: [40,25]
 *
 * Constraints:
 * 1 <= num <= 10^9
 *
 * 给你一个整数 num，请你找出同时满足下面全部要求的两个整数：
 * 1. 两数乘积等于  num + 1 或 num + 2
 * 2. 以绝对差进行度量，两数大小最接近
 * 你可以按任意顺序返回这两个整数。
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
  let i = Math.floor(Math.sqrt(num + 2))

  while (i >= 1) {
    if ((num + 1) % i === 0) {
      return [i, (num + 1) / i]
    } else if ((num + 2) % i === 0) {
      return [i, (num + 2) / i]
    }
    i -= 1
  }
}
