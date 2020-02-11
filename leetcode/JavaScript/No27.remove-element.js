/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement_1 = function(nums, val) {
  for (var i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 * 双指针
 */
var removeElement_2 = function(nums, val) {
  if (!nums.length) return 0

  let i = 0
  let j = 0

  while (j < nums.length) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i += 1
    }
    j += 1
  }
  return i
}
