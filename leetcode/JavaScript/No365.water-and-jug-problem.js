/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available.
 * You need to determine whether it is possible to measure exactly z litres using these two jugs.
 * If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.
 *
 * Operations allowed:
 * 1. Fill any of the jugs completely with water.
 * 2. Empty any of the jugs.
 * 3. Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
 *
 * Example 1: (From the famous "Die Hard" example)
 * Input: x = 3, y = 5, z = 4
 * Output: True
 *
 * Example 2:
 * Input: x = 2, y = 6, z = 5
 * Output: False
 *
 * 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？
 * 如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。
 * 你允许：
 * 1. 装满任意一个水壶
 * 2. 清空任意一个水壶
 * 3. 从一个水壶向另外一个水壶倒水，直到装满或者倒空
 *
 * 最大公约数 gcd +
 * 裴蜀定理: https://zh.wikipedia.org/wiki/%E8%B2%9D%E7%A5%96%E7%AD%89%E5%BC%8F
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 *
 * https://leetcode-cn.com/problems/water-and-jug-problem/solution/shui-hu-wen-ti-by-leetcode-solution/
 */
var canMeasureWater = function(x, y, z) {
  if (x + y < z) return false
  if (x === 0 || y === 0) {
    return z === 0 || x + y === z
  }
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  return z % gcd(x, y) === 0
}

// 0, 5
// 3, 2 -> 0, 2 -> 2, 0
// 2, 5
// 3, 4 -> 0, 4
