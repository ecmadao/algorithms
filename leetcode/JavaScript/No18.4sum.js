/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 * given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *    [-1,  0, 0, 1],
 *    [-2, -1, 1, 2],
 *    [-2,  0, 0, 2]
 * ]
 *
 * 四数求和，类似于之前的三数求和，只是注意处理重复值的问题
 */

var twoSum = function(nums, target) {
  var i = 0;
  var j = nums.length - 1;
  var mapped = new Set();
  var results = [];

  while(i < j) {
    var a = nums[i];
    var b = nums[j];
    if (a + b < target) {
      i += 1;
    } else if (a + b > target) {
      j -= 1;
    } else {
      if (!mapped.has(a)) {
        results.push([a, b]);
        mapped.add(a);
      }
      i += 1;
    }
  }
  return results;
};

/**
* @param {number[]} nums
* @param {number} target
* @return {number[][]}
*/
var fourSum = function(nums, target) {
  var results = [];
  nums.sort((a, b) => a - b);

  var mappedI = new Set();
  for (var i = 0; i <= nums.length - 4; i += 1) {
    var a = nums[i];
    if (mappedI.has(a)) continue;
    mappedI.add(a);

    var mappedJ = new Set();
    for (var j = i + 1; j <= nums.length - 3; j += 1) {
      var b = nums[j];
      if (mappedJ.has(b)) continue;
      mappedJ.add(b)
      var num = target - a - b;
      var twoSumResult = twoSum(nums.slice(j + 1), num);
      var arrays = twoSumResult.map(array => [a, b, ...array]);
      results.push(...arrays);
    }
  }

  return results;
};