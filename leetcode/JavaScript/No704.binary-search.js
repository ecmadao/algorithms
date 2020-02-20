/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
 * If target exists, then return its index, otherwise return -1.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Note:
 * 1. You may assume that all elements in nums are unique.
 * 2. n will be in the range [1, 10000].
 * 3. The value of each element in nums will be in the range [-9999, 9999]
 *
 * 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const num = nums[mid]
    if (num === target) return mid
    if (num < target) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return -1
}
