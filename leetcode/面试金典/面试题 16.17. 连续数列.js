/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 给定一个整数数组（有正数有负数），找出总和最大的连续数列，并返回总和。
 *
 * 示例：
 * 输入： [-2,1,-3,4,-1,2,1,-5,4]
 * 输出： 6
 * 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 * 进阶：
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_1 = function(nums) {
  if (!nums) return 0
  if (nums.length === 1) return nums[0]

  let sum = 0
  let result = -Infinity

  for (const num of nums) {
    sum = sum < 0 ? num : sum + num
    result = Math.max(result, sum)
  }
  return Math.max(result, sum)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_2 = function(nums) {
  if (!nums) return 0

  const dp = Array.from({ length: nums.length }, (_, i) => 0)
  let result = -Infinity

  for (let i = 1; i <= nums.length; i += 1) {
    dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1])
    result = Math.max(dp[i], result)
  }
  return result
}
