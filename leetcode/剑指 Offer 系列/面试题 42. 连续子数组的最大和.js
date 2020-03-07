/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 *
 * 示例1:
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 * 提示：
 * 1. 1 <= arr.length <= 10^5
 * 2. -100 <= arr[i] <= 100
 *
 * 同：https://leetcode-cn.com/problems/maximum-subarray/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = -Infinity
  let cur = -Infinity

  for (const num of nums) {
    cur = Math.max(0, cur) + num
    res = Math.max(res, cur)
  }
  return res
}
