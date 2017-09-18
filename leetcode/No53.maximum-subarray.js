/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 *
 * Example:
 * given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 *
 * 给一个数组，求出其中子数组的最大和
 */

/**
 * 思路：
 * 因为我们要求的是数组中子数组数值之和的最大值，因此负数必须越少越好。
 * 只需要 O(n) 的复杂度即可：
 * 遍历数组，每次在当前位 num 判断之前数据的和 sum：
 * 1. 如果 sum > 0，则 sum += num
 * 2. 如果 sum <=0，则 sum = num（之前的和已经是负数了，只能拖累之和数据之和，因此应该舍弃）
 * 然后始终有一个变量负责保存 sum 所拥有过的最大值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = nums[0];
  var sum = nums[0];

  for (var i = 1; i < nums.length; i += 1) {
    sum = sum < 0 ? nums[i] : sum + nums[i];
    if (max < sum) max = sum;
  }
  return max;
};