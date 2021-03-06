/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a positive integer n, find the least number of perfect square numbers
 * (for example, 1, 4, 9, 16, ...) which sum to n.
 *
 * Example:
 * given n = 12, return 3 because 12 = 4 + 4 + 4;
 * given n = 13, return 2 because 13 = 4 + 9.
 *
 * 给出一个数，求这个数最少需由多少个完全平方数组成
 */

/**
 * 思路：
 * 先明确两点：
 * 1. 如果一个数 n 是完全平方数，则组成它的最少完全平方数为 1
 * 2. 在组成该数的各个完全平方数中，每个完全平方数开根号以后的结果一定小于等于 Math.sqrt(n)
 *
 * 应该属于动态规划问题
 */

/**
 * 正确但会超时的答案：
 * 从 Math.sqrt(n) 开始遍历，逐步减少
 * 每次遍历都利用当前的 i 求出一个差，然后把该值进行递归
 * 该方法会 timeout，因为它没能利用已有的结果，因此进行了重复的遍历
 * 比如，针对 15 求出的结果是 4，但是面对 12 时需要重复再算一遍
 */

/**
 * @param {number} n
 * @return {number}
 *
 * 分治递归，超时
 */
var numSquares_1 = function(n) {
  if (n <= 1) return n

  const end = Math.floor(Math.sqrt(n))
  let result = Infinity

  for (let i = end; i >= 1; i -= 1) {
    result = Math.min(result, numSquares(n - i * i) + 1)
  }

  return result
};


/**
 * Accepted Answer:
 * 从 1 开始遍历，每次都针对 i 求出其结果，在之后的遍历中也可以用到
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares_2 = function(n) {
  if (n <= 3) return n;
  var num = Math.sqrt(n);
  if (num % 1 === 0) return 1;

  var tmp = {};
  for (var i = 1; i <= n; i += 1) {
    tmp[i] = i;
    var sqrt = Math.sqrt(i);
    if (sqrt % 1 === 0) {
      tmp[i] = 1;
      continue;
    }
    for (var j = 1; j < sqrt; j += 1) {
      var last = i - j * j;
      tmp[i] = Math.min(tmp[i], tmp[last] + 1);
    }
  }
  return tmp[n];
};

/**
 * @param {number} n
 * @return {number}
 *
 * 动态规划 DP
 */
var numSquares_3 = function(n) {
  if (n <= 1) return n
  const dp = { 0: 0 }

  for (let i = 1; i <= n; i += 1) {
    dp[i] = i
    for (let j = 1; j <= i; j += 1) {
      if (i < j * j) break
      // 状态转移
      dp[i] = Math.min(dp[i], (dp[i - j * j]) + 1)
    }
  }
  return dp[n]
}
