/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T),
 * find all unique combinations in C where the candidate numbers sums to T.
 * The same repeated number may be chosen from C unlimited number of times.
 *
 * Example:
 * given candidate set [2, 3, 6, 7] and target 7
 * A solution set is:
 * [
 *    [7],
 *    [2, 2, 3]
 * ]
 *
 * Note:
 * 1. All numbers (including target) will be positive integers.
 * 2. The solution set must not contain duplicate combinations.
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合
 * 例如，数组 [2, 3, 6, 7]，指定值为 7，则 2 + 2 + 3 = 7; 7 = 7，因此组合为 [2, 2, 3] 和 [7]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * 回溯
 */
var combinationSum = function(candidates, target) {
  candidates.sort((n1, n2) => n1 - n2)
  const result = []

  const combine = (index, remain, arr) => {
    if (remain === 0) {
      result.push([...arr])
      return
    }
    if (index >= candidates.length) return

    for (let i = index; i < candidates.length; i += 1) {
      if (candidates[i] > remain) break
      arr.push(candidates[i])
      combine(i, remain - candidates[i], arr)
      arr.pop()
    }
  }

  combine(0, target, [])
  return result
}

// test case
var results;

results = combinationSum([2, 3, 6, 7], 7);
console.log(results);

const results = combinationSum([1], 2);
console.log(results);

results = combinationSum([7,3,2], 18);
console.log(results);
