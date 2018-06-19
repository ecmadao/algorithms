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
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const tmp = [0, 1, 2, 3];
  if (n <= 3) return tmp[n - 1];

  for (let i = 4; i <= n; i += 1) {
    tmp[i] = Math.max(
      tmp[i - 3] * 3,
      tmp[i - 2] * 2
    );
  }
  return tmp[n];
};

// Test case
console.log(integerBreak(10)); // 35
console.log(integerBreak(9)); // 27
console.log(integerBreak(8)); // 18
console.log(integerBreak(7)); // 12
console.log(integerBreak(6));
console.log(integerBreak(2));
console.log(integerBreak(3));
console.log(integerBreak(42));
