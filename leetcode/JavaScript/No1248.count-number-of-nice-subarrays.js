/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers nums and an integer k. A subarray is called nice if there are k odd numbers on it.
 * Return the number of nice sub-arrays.
 *
 * Example 1:
 * Input: nums = [1,1,2,1,1], k = 3
 * Output: 2
 * Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
 *
 * Example 2:
 * Input: nums = [2,4,6], k = 1
 * Output: 0
 * Explanation: There is no odd numbers in the array.
 *
 * Example 3:
 * Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
 * Output: 16
 *
 * Constraints:
 * 1. 1 <= nums.length <= 50000
 * 2. 1 <= nums[i] <= 10^5
 * 3. 1 <= k <= nums.length
 *
 * 给你一个整数数组 nums 和一个整数 k。
 * 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
 * 请返回这个数组中「优美子数组」的数目
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let i = 0
  let j = 0
  let result = 0
  let sub = 1

  while (j < nums.length) {
    if (nums[j] % 2 === 1) {
      k -= 1
      if (k === -1) {
        i += 1
        k = 0
      }

      if (k === 0) {
        sub = 1
        while (i < j && nums[i] % 2 === 0) {
          sub += 1
          result += 1
          i += 1
        }
        result += 1
      }
    } else if (k === 0) {
      result += sub
    }
    j += 1
  }
  return result
}

// [2,2,2,1,2,2,1,2,2,2,1,2,2,2]