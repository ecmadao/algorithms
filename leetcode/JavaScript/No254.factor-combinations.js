/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Numbers can be regarded as product of its factors. For example,
 * 8 = 2 x 2 x 2;
 *   = 2 x 4.
 * Write a function that takes an integer n and return all possible combinations of its factors.
 *
 * Note:
 * 1. You may assume that n is always positive.
 * 2. Factors should be greater than 1 and less than n.
 *
 * Example 1:
 * Input: 1
 * Output: []
 *
 * Example 2:
 * Input: 37
 * Output:[]
 *
 * Example 3:
 * Input: 12
 * Output:
 * [
 * [2, 6],
 * [2, 2, 3],
 * [3, 4]
 * ]
 *
 * Example 4:
 * Input: 32
 * Output:
 * [
 * [2, 16],
 * [2, 2, 8],
 * [2, 2, 2, 4],
 * [2, 2, 2, 2, 2],
 * [2, 4, 4],
 * [4, 8]
 * ]
 *
 * 接收一个整数 n 并返回该整数所有的因子组合
 * 1. 可以假定 n 为永远为正数。
 * 2. 因子必须大于 1 并且小于 n
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n, start = 2) {
  const results = []

  for (let i = start; i * i <= n; i += 1) {
    if (n % i !== 0) continue
    results.push([n / i, i])
    const factors = getFactors(n / i, i)
    results.push(
      ...factors.map(factor => [...factor, i])
    )
  }
  return results
}
