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
  candidates.sort((a, b) => a - b);
  var results = [];
  var pre = null;

  for (var i = 0; i < candidates.length; i += 1) {
    var num = candidates[i];
    if (pre === num) continue;
    pre = num;
    if (num === target) {
      results.push([num]);
      continue;
    }

    var remainder = target - num;

    if (remainder < 0) continue;

    var nums = combinationSum2(candidates.slice(i + 1), remainder);

    if (nums.length) {
      results.push(
        ...nums.map((array) => {
          array.unshift(num);
          return array;
        })
      );
    }
  }
  return results;
};

var result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(result);