/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * Example:
 * Given input array nums = [1,1,2],
 * Your function should return length = 2,
 * with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 *
 * 去除一个已排序的数组中重复的元素，且不能占用额外的空间（不能新建）
 */

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};