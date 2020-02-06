/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 * Example:
 * If n = 4 and k = 2, a solution is:
 * [
 *    [2,4],
 *    [3,4],
 *    [2,3],
 *    [1,2],
 *    [1,3],
 *    [1,4],
 * ]
 *
 * 给定一个最大值 n，元素个数 k，求在 [1, n] 范围内 k 个数的排列组合
 * 例如，n = 3, k = 2
 * 则返回 [[1, 2], [1, 3], [2, 3]]
 * 注意，不能有重复的元素，即 [1, 2] 和 [2, 1] 被认为是重复的
 */

/**
 * 思路：
 * 考核回溯编程的能力
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 *
 * 回溯算法
 */
var combine = function(n, k) {
  const result = []

  const _combine = (arr, remain, index) => {
    if (!remain) {
      result.push([...arr])
      return
    }
    if (index + remain - 1 > n) return

    for (let i = index; i <= n; i += 1) {
      arr.push(i)
      _combine(arr, remain - 1, i + 1)
      arr.pop()
    }
  }

  _combine([], k, 1)
  return result
}
