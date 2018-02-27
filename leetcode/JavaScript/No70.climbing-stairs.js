/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * 爬楼梯问题：一共有 n 阶楼梯，一次可以上 1 层或 2 层，问总共有多少种上法
 */


/**
 * Solution 1:
 * 动态规划 - normal way
 */
var tmp = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (tmp[n] !== undefined) return tmp[n];
  if (n <= 2) return n;
  var count = climbStairs(n - 1) + climbStairs(n - 2);
  tmp[n] = count;
  return count;
};
