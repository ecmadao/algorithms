/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement int sqrt(int x).
 * Compute and return the square root of x.
 *
 * 求最接近 x 的开方的整数（返回的结果的平方要小于等于 x）
 */

/**
 * @param {number} x
 * @return {number}
 * 二分法
 */
var mySqrt_1 = function(x) {
  let i = 0
  let j = x

  while (i < j) {
    const mid = Math.ceil((i + j) / 2)
    const num = mid * mid
    if (num === x) return mid
    if (num < x) {
      i = mid
    } else {
      j = mid - 1
    }
  }
  return i
}

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt_2 = function(x) {
  let start = Math.floor(x / 2)
  while (start * start > x) start = Math.floor(start / 2)
  while (start * start <= x) start += 1
  return start - 1
}

/**
 * @param {number} x
 * @return {number}
 * 牛顿法开方
 * 效率比二分法低，更适合寻找无限逼近开方的浮点数
 *
 * t * t = x
 * -> x / t = t
 * -> x / t + t = 2t
 * -> t = (x / t + t) / 2
 */
const mySqrt_2 = (x) => {
  let result = 1
  // 对于牛顿法而言，寻找一个数字 t, 令 t 约等于 (c / t + t) / 2 时，t 即为 c 的开方
  const newton = (c, t) => (c / t + t) / 2

  while (result <= x / 2) {
    const offset = newton(x, result)
    if (Math.floor(Math.abs(offset - result)) === 0) break
    result += 1
  }
  return result * result > x
    ? result - 1
    : result
}
