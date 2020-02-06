/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Rotate an array of n elements to the right by k steps.
 *
 * Example:
 * With n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 *
 * Note:
 * Try to come up as many solutions as you can,
 * there are at least 3 different ways to solve this problem.
 *
 * Hint:
 * Could you do it in-place with O(1) extra space?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 */
var rotate_1 = function(nums, k) {
  const tmp = [];
  for (let i = 0; i < nums.length; i += 1) {
    tmp[(i + k) % nums.length] = nums[i];
  }
  for (let i  = 0; i < tmp.length; i += 1) {
    nums[i] = tmp[i];
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate_2 = function(nums, k) {
  // k 是 nums.length 的整数倍时，数组会回复原状
  let count = k % nums.length

  while (count) {
    nums.unshift(nums.pop())
    count -= 1
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate_3 = function(nums, k) {
  // k 是 nums.length 的整数倍时，数组会回复原状
  let count = k % nums.length

  nums.splice(0, 0, ...nums.splice(nums.length - count, count))
}
