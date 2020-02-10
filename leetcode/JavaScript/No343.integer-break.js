/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers.
 * Return the maximum product you can get.
 *
 * Example:
 * given n = 2, return 1 (2 = 1 + 1);
 * given n = 10, return 36 (10 = 3 + 3 + 4).
 *
 * Note:
 * You may assume that n is not less than 2 and not larger than 58.
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积
 */

 /**
 * @param {number} n
 * @return {number}
 *
 * 迭代
 */
var integerBreak_1 = function(n) {
  if (n <= 2) return 1
  if (n === 3) return 2
  const cache = {}

  const func = (num) => {
    if (num <= 2) return 1
    if (cache[num] !== undefined) return cache[num]
    let result = -Infinity

    for (let i = 1; i <= num; i += 1) {
      result = Math.max(result, i * func(num - i))
    }
    cache[num] = result
    return result
  }
  return func(n)
}

/**
 * @param {number} n
 * @return {number}
 *
 * 动态规划
 */
var integerBreak_2 = function(n) {
  const tmp = [0, 1, 2, 3]
  if (n <= 3) return tmp[n - 1]

  for (let i = 4; i <= n; i += 1) {
    tmp[i] = Math.max(
      tmp[i - 3] * 3,
      tmp[i - 2] * 2
    )
  }
  return tmp[n]
}

// Test case
console.log(integerBreak_2(10)); // 35
console.log(integerBreak_2(9)); // 27
console.log(integerBreak_2(8)); // 18
console.log(integerBreak_2(7)); // 12
console.log(integerBreak_2(6));
console.log(integerBreak_2(2));
console.log(integerBreak_2(3));
console.log(integerBreak_2(42));
