/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.
 *
 * Example 1:
 * Input: [1,0,1,1,0]
 * Output: 4
 * Explanation:
 * Flip the first zero will get the the maximum number of consecutive 1s.
 * After flipping, the maximum number of consecutive 1s is 4.
 *
 * Note:
 * 1. The input array will only contain 0 and 1.
 * 2. The length of input array is a positive integer and will not exceed 10,000
 *
 * Follow up:
 * What if the input numbers come in one by one as an infinite stream?
 * In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. Could you solve it efficiently?
 *
 * 给定一个二进制数组，你可以最多将 1 个 0 翻转为 1，找出其中最大连续 1 的个数
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 滑动窗口
 */
var findMaxConsecutiveOnes = function(nums) {
  let i = 0
  let j = 0
  let index = null
  let result = 0

  while (j < nums.length) {
    if (nums[j] !== 1) {
      if (index !== null) {
        result = Math.max(result, j - i)
        i = index + 1
      }
      index = j
    }
    j += 1
  }
  return Math.max(result, j - i)
}
