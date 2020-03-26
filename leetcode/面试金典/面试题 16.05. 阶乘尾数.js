/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 设计一个算法，算出 n 阶乘有多少个尾随零。
 *
 * 示例 1:
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 *
 * 示例 2:
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 *
 * 说明: 你算法的时间复杂度应为 O(log n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0
  while (n > 0) {
    res += Math.floor(n / 5)
    n = Math.floor(n / 5)
  }
  return res
}
