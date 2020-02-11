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
var removeDuplicates_1 = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 快慢双指针
 * 只要 nums[slow] === nums[fast]，我们就增加 fast 以跳过重复项
 */
var removeDuplicates_2 = function(nums) {
  if (!nums.length) return 0

  let slow = 0
  let fast = 1
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow += 1
      nums[slow] = nums[fast]
    }
    fast += 1
  }
  return slow + 1
}
