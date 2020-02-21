/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A peak element is an element that is greater than its neighbors.
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 * You may imagine that num[-1] = num[n] = -∞.
 * For example, in array [1, 2, 3, 1],
 * 3 is a peak element and your function should return the index number 2.
 *
 * Note:
 * Your solution should be in logarithmic complexity.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0

  for (let i = 0; i < nums.length; i += 1) {
    if (i === 0 && nums[i] > nums[i + 1]) return i
    if (i === nums.length - 1 && nums[i] > nums[i - 1]) return i
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i
  }
  return nums.length - 1
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 二分搜索
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    if (left === right) return left
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
}
