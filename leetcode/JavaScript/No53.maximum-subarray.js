/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 *
 * Example:
 * given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4],
 * the contiguous subarray [4, -1, 2, 1] has the largest sum = 6.
 *
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 *
 * Leetcode 53：最大子序和（最详细的解法！！！）
 * https://blog.csdn.net/qq_17550379/article/details/82963541
 *
 * 最大子数列问题
 * https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E5%88%97%E9%97%AE%E9%A2%98
 *
 * Kadane’s Algorithm Explained
 * https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6#subscribe-embed
 */

/**
 * 思路：
 * 因为我们要求的是数组中子数组数值之和的最大值，因此负数必须越少越好。
 * 只需要 O(n) 的复杂度即可：
 * 遍历数组，每次在当前位 num 判断之前数据的和 sum：
 * 1. 如果 sum > 0，则 sum += num
 * 2. 如果 sum <= 0，则 sum = num（之前的和已经是负数了，只能拖累之和数据之和，因此应该舍弃）
 * 然后始终有一个变量负责保存 sum 所拥有过的最大值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_1 = function(nums) {
  var max = nums[0]
  var sum = nums[0]

  for (var i = 1; i < nums.length; i += 1) {
    sum = sum < 0 ? nums[i] : sum + nums[i]
    if (max < sum) max = sum
  }
  return max
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 滑动窗口解法
 * kadane algorithm
 */
var maxSubArray_2 = function(nums) {
  let sum = 0
  let result = -Infinity

  for (const num of nums) {
    if (sum < 0) {
      sum = num
    } else {
      sum += num
    }
    result = Math.max(result, sum)
  }
  return result
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_3 = function(nums) {
  let result = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    result = Math.max(result, nums[i])
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 动态规划
 * f(k)表示以当前元素结尾的子数组的最大值，则f(k)应该等于max(num[k],f(k-1)+num[k])
 */
var maxSubArray_4 = function(nums) {
  if (nums.length < 1) return 0
  const dp = [nums[0]]
  let result = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    result = Math.max(result, dp[i])
  }
  return result
}
