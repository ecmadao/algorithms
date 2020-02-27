/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 我们把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
 *
 * 示例:
 * 输入: n = 10
 * 输出: 12
 * 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 *
 * 说明:
 * 1. 1 是丑数。
 * 2. n 不超过 1690
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const ugly = [1, 1, 1]
  const index = [0, 0, 0]

  for (let i = 1; i < n; i += 1) {
    const n1 = ugly[index[0]] * 2
    const n2 = ugly[index[1]] * 3
    const n3 = ugly[index[2]] * 5
    const min = Math.min(n1, n2, n3)

    if (min === n1) {
      index[0] += 1
    }
    if (min === n2) {
      index[1] += 1
    }
    if (min === n3) {
      index[2] += 1
    }
    ugly[i] = min
  }
  return ugly[n - 1]
}
