/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定两个整数数组a和b，计算具有最小差绝对值的一对数值（每个数组中取一个值），并返回该对数值的差
 *
 * 示例：
 * 输入：{1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
 * 输出： 3，即数值对(11, 8)
 *
 * 提示：
 * 1. 1 <= a.length, b.length <= 100000
 * 2. -2147483648 <= a[i], b[i] <= 2147483647
 * 3. 正确结果在区间[-2147483648, 2147483647]内
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {
  a.sort((n1, n2) => n1 - n2)
  b.sort((n1, n2) => n1 - n2)

  let i = 0
  let j = 0
  let min = Infinity
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) return 0
    if (a[i] < b[j]) {
      while (i + 1 < a.length && a[i + 1] < b[j]) i += 1
      min = Math.min(b[j] - a[i], min)
      i += 1
    } else {
      while (j + 1 < b.length && b[j + 1] < a[i]) j += 1
      min = Math.min(a[i] - b[j], min)
      j += 1
    }
  }
  return min
}
