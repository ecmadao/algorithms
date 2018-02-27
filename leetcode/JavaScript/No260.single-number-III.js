/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of numbers nums,
 * in which exactly two elements appear only once and all the other elements appear exactly twice.
 * Find the two elements that appear only once.
 *
 * Example:
 * Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
 *
 * Note:
 * 1. The order of the result is not important. So in the above example, [5, 3] is also correct.
 * 2. Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
 *
 * 给一个有重复数字的数组，求出其中不重复的数字
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var set = new Set(nums);
  var obj = {};
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    obj[num] = obj[num] === undefined ? 1 : obj[num] + 1;
    if (obj[num] === 2) {
      set.delete(num);
    }
  }
  return [...set];
};