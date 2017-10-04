/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a set of distinct integers, nums, return all possible subsets.
 *
 * Example:
 * If nums = [1,2,3], a solution is:
 * [
 *    [3],
 *    [1],
 *    [2],
 *    [1,2,3],
 *    [1,3],
 *    [2,3],
 *    [1,2],
 *    []
 * ]
 *
 * Note:
 * The solution set must not contain duplicate subsets.
 *
 * 从数组中求出所有没有重复元素的组合
 * 跟上一题 No77.Combinations 一样的思路，只是稍微复杂了一点
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var results = [[]];
  var max = nums.length;

  var chooseNum = function(result, min, layer, maxLayer) {
    for (var i = min + 1; i < max; i += 1) {
      result.push(nums[i]);
      if (layer === maxLayer) {
        results.push(result.slice(0));
      } else {
        chooseNum(result, i, layer + 1, maxLayer);
      }
      result.pop();
    }
  }

  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    results.push([num]);
    var length = 2;
    while(length <= nums.length - i) {
      chooseNum([num], i, 2, length);
      length += 1;
    }
  }

  return results;
};
