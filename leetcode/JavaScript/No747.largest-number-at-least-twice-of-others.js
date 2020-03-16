/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a given integer array nums, there is always exactly one largest element.
 * Find whether the largest element in the array is at least twice as much as every other number in the array.
 * If it is, return the index of the largest element, otherwise return -1.
 *
 * Example 1:
 * Input: nums = [3, 6, 1, 0]
 * Output: 1
 * Explanation:
 * 6 is the largest integer, and for every other number in the array x,
 * 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: -1
 * Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 *
 * Note:
 * nums will have a length in the range [1, 50].
 * Every nums[i] will be an integer in the range [0, 99].
 *
 * 在一个给定的数组 nums 中，总是存在一个最大元素 。
 * 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * 如果是，则返回最大元素的索引，否则返回 -1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = 0
  let rate = 2
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[max]) {
      if (nums[max] !== 0) {
        rate = Math.min(
          (nums[i] / nums[max]) * rate,
          nums[i] / nums[max]
        )
      }
      max = i
    } else if (nums[i] !== 0) {
      rate = Math.min(rate, nums[max] / nums[i])
    }
  }
  return rate >= 2 ? max : -1
}
