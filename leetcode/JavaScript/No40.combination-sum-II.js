/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * Each number in C may only be used once in the combination.
 *
 * Example:
 * given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
 * A solution set is:
 * [
 *    [1, 7],
 *    [1, 2, 5],
 *    [2, 6],
 *    [1, 1, 6]
 * ]
 *
 * Note:
 * 1. All numbers (including target) will be positive integers.
 * 2. The solution set must not contain duplicate combinations.
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合
 *
 * 跟 39 题基本一样，但有如下区别：
 * 单个元素不能重复，除非原数组中本来就有重复
 * 比如，[1], target: 2，则无解。但如果是 [1, 1]，则解为 [[1, 1]]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((c1, c2) => c1 - c2)
  const result = []

  const combine = (index, remain, arr) => {
    if (!remain) {
      result.push([...arr])
      return
    }
    if (index >= candidates.length) return

    for (let i = index; i < candidates.length; i += 1) {
      if (candidates[i] > remain) break
      if (i > index && candidates[i] === candidates[i - 1]) continue
      arr.push(candidates[i])
      combine(i + 1, remain - candidates[i], arr)
      arr.pop()
    }
  }

  combine(0, target, [])
  return result
}

// Test case
console.log(
  combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
)
