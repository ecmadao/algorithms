/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 *
 * Example:
 * Given nums = [0, 1, 3] return 2.
 *
 * Note:
 * Your algorithm should run in linear runtime complexity.
 * Could you implement it using only constant extra space complexity?
 *
 * 输入一个长度为 n 的数组，里面的数字应该处于 [0, n] 的范围内，但现在有缺失
 * 求缺失的数字
 * 例如，[0, 1, 3, 4, 5] 长度 为 5，缺失了 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var set = new Set(nums);
  var missing = null;
  for (var i = 0; i <= nums.length; i += 1) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};