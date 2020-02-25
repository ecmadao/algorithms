/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement pow(x, n).
 *
 * 不借助已有函数库来实现 pow(x, n)
 */

/**
 * 思路：
 * 使用分治法，即 pow(x, n) = pow(x, n - n / 2) * pow(x, n / 2)
 * 但仅仅这样，当 n 非常大的时候还是会超时。
 * 可以将 n 转为偶数，这样则 pow(x, n) = pow(x * x, n / 2)，时间复杂度可以降低一半
 * 而当 n 为奇数时，pow(x, n) = x * pow(x * x, (n - 1) / 2)
 *
 * 注意：
 * 1. 处理 32 位 int 最大/最小值（虽然 JS 不会有这种情况，之前已经吐槽过了）
 * 2. 处理 n <= 0 的情况
 */

var INT_MIN = -2147483648;
var INT_MAX = 2147483647;

var pow = function(x, n) {
  if (n === 2) return x * x;
  if (n === 1) return x;
  if (n === 0) return 1;
  if (n <= 2) return multiply(x, n);
  return pow(x, n / a) * pow(x, n / 2);
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  var result;
  if (n === 0) {
    result = 1;
  } else if (n < 0) {
    if (n <= INT_MIN) {
      result = 1 / (myPow(x, INT_MAX) * x);
    } else {
      result = 1 / myPow(x, -n);
    }
  } else {
    if (n % 2 === 1) {
      result = x * myPow(x, n -1);
    } else {
      result = myPow(x * x, n / 2);
    }
  }
  if (result >= INT_MAX) result = INT_MAX;
  return result;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow_2 = function(x, n) {
  if (n === 0) return 1
  const isNegative = n < 0
  n = Math.abs(n)

  const isEven = n % 2 === 0

  const result = isEven ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2)
  return isNegative ? 1 / result : result
}
