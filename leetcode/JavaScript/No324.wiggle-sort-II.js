/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
 *
 * Example 1:
 * Input: nums = [1, 5, 1, 1, 6, 4]
 * Output: One possible answer is [1, 4, 1, 5, 1, 6].
 *
 * Example 2:
 * Input: nums = [1, 3, 2, 2, 3, 1]
 * Output: One possible answer is [2, 3, 1, 3, 1, 2].
 *
 * Note:
 * You may assume all input has valid answer.
 *
 * Follow Up:
 * Can you do it in O(n) time and/or in-place with O(1) extra space?
 *
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  nums.sort((n1, n2) => n1 - n2)
  const tmp = [...nums]

  for (let i = 1; i < nums.length; i += 2) {
    nums[i] = tmp.pop()
  }
  for (let i = 0; i < nums.length; i += 2) {
    nums[i] = tmp.pop()
  }
}
