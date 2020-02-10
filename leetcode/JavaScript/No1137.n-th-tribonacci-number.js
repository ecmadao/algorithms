/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 * Example 1:
 * Input: n = 4
 * Output: 4
 * Explanation:
 * 1. T_3 = 0 + 1 + 1 = 2
 * 2. T_4 = 1 + 1 + 2 = 4
 *
 * Example 2:
 * Input: n = 25
 * Output: 1389537
 *
 * Constraints:
 * 1. 0 <= n <= 37
 * 2. The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 *
 * 泰波那契序列 Tn 定义如下：
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let n1 = 0
  let n2 = 1
  let n3 = 1
  if (n === 0) return n1
  if (n === 1) return n2
  if (n === 2) return n3

  for (let i = 3; i <= n; i += 1) {
    const sum = n1 + n2 + n3
    n1 = n2
    n2 = n3
    n3 = sum
  }
  return n3
}
