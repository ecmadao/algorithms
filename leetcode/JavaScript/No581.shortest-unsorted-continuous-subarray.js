/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order,
 * then the whole array will be sorted in ascending order, too.
 * You need to find the shortest such subarray and output its length.
 *
 * Example 1:
 * Input: [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 *
 * Note:
 * 1. Then length of the input array is in range [1, 10,000].
 * 2. The input array may contain duplicates, so ascending order here means <=.
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 你找到的子数组应是最短的，请输出它的长度
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let high = 0
  let low = nums.length - 1
  let max = -Infinity
  let min = Infinity

  for (let i = 0; i < nums.length; i += 1) {
    max = Math.max(max, nums[i])
    if (nums[i] < max) high = i
  }
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    min = Math.min(min, nums[i])
    if (nums[i] > min) low = i
  }
  return high <= low ? 0 : high - low + 1
}

// Test case
// [2,6,8,4,9,15]