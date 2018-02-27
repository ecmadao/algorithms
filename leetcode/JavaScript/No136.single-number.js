/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity.
 * Could you implement it without using extra memory?
 *
 * 在一个数组中，除了一个元素以外，其他都出现了两次，求出这个元素
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var single = null;
  var obj = {};
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    if (i === nums.length - 1 && obj[num] === undefined) single = num;
    obj[num] = obj[num] === undefined ? 1 : obj[num] + 1;
  }
  if (single !== null) return single;
  for (var i = 0; i < nums.length; i += 1) {
    if (obj[nums[i]] === 1) {
      single = nums[i];
      break;
    }
  }
  return single;
};