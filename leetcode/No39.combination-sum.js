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
 * 给出一个不包含重复数字的数组，以及一个指定的值。求出所有由数组中的元素相加可以等于指定值的组合
 * 例如，数组 [2, 3, 6, 7]，指定值为 7，则 2 + 2 + 3 = 7; 7 = 7，因此组合为 [2, 2, 3] 和 [7]
 * 提示：数组中全部都是正数；可以重复使用数字
 */

/**
 * 思路：
 * 从头开始遍历，以当前数字 num 为基准，算出目标值 target 是其的多少倍（例如 count）。
 * 因此，结果的数组中，当前数字最多就可能出现 count 次。
 * 逐步降低 count，并计算当前差值：remainder = target - count * num，从剩下的数组中寻找 remainder
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var set = new Set(candidates);
  var results = [];

  for (var i = 0; i < candidates.length; i += 1) {
    var num = candidates[i];
    if (num === target) {
      results.push([num]);
      continue;
    }
    var count = Math.floor(target / num);

    while(count >= 1) {
      var remainder = target - count * num;

      if (remainder === 0) {
        results.push(
          new Array(count).fill(num)
        );
        count -= 1;
        continue;
      }
      var nums = combinationSum(candidates.slice(i + 1), remainder);

      if (nums.length) {
        var base = new Array(count).fill(num);
        results.push(
          ...nums.map((array) => {
            var items = base.concat(array);
            return items;
          })
        );
      }
      count -= 1;
    }
  }
  return results;
};

// test case
// const results = combinationSum([2, 3, 6, 7], 7);
// console.log(results);

const results = combinationSum([1], 2);
console.log(results);