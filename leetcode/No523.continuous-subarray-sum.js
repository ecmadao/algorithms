/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of non-negative numbers and a target integer k,
 * write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k,
 * that is, sums up to n*k where n is also an integer.
 *
 * Example:
 * Input: [23, 2, 4, 6, 7],  k=6
 * Output: True
 * Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
 *
 * Input: [23, 2, 6, 4, 7],  k=6
 * Output: True
 * Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
 *
 * 判断一个数组内，是否存在一段连续的，长度不小于 2 的子数组，其各元素之和可以被 k 整除
 */

/**
 * 思路：
 * 该题基本考核数学：
 * 若数字 a 和 b 分别除以数字 c，若得到的余数相同，那么 (a-b) 必定能够整除 c
 * 在这道题内，即两个长度只差不小于 2 的子数组（包含关系），如果它们的各元素和除以 k 所得的余数相同，
 * 则两个数组的差集的数组之和可以被 k 整除
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  var sum = 0;
  var remainder = 0;
  var temp = new Set();
  for (var i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    var r = k === 0 ? sum : sum % k;
    if (temp.has(r)) return true;
    temp.add(remainder);
    remainder = r;
  }
  return false;
};
