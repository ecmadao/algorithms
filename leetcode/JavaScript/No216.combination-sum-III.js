/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
 *
 * Note:
 * - All numbers will be positive integers.
 * - The solution set must not contain duplicate combinations.
 *
 * Example:
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 *
 * Input: k = 3, n = 9
 * Output: [[1,2,6], [1,3,5], [2,3,4]]
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 说明：
 * 1. 所有数字都是正整数。
 * 2. 解集不能包含重复的组合
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 *
 * 回溯
 */
var combinationSum3 = function(k, n) {
  const candidates = Array.from({ length: 9 }, (_, i) => i + 1)
  const result = []

  const combine = (index, remain, count, arr) => {
    if (!remain && count === k) {
      result.push([...arr])
      return
    }
    if (index >= candidates.length || (count >= k && remain)) return

    for (let i = index; i < candidates.length; i += 1) {
      if (candidates[i] > remain) break
      arr.push(candidates[i])
      combine(i + 1, remain - candidates[i], count + 1, arr)
      arr.pop()
    }
  }

  combine(0, n, 0, [])
  return result
}
