/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Your are given an array of positive integers nums.
 * Count and print the number of (contiguous)
 * subarrays where the product of all the elements in the subarray is less than k.
 *
 * Example:
 * Input: nums = [10, 5, 2, 6], k = 100
 * Output: 8
 * Explanation:
 * The 8 subarrays that have product less than 100 are:
 * [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
 * Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 *
 * Note:
 * - 0 < nums.length <= 50000.
 * - 0 < nums[i] < 1000.
 * - 0 <= k < 10^6.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let result = 0;
  if (!nums.length) return result;

  let curProduct = 1;
  let i = 0;
  let j = 0;

  while (i < nums.length || j < nums.length) {
    if (curProduct >= k) {
      curProduct /= nums[i];
      i += 1;
      if (j > i && curProduct < k) result += (j - i);
      continue;
    }
    if (j >= nums.length) break;

    const num = nums[j];
    curProduct *= num;
    if (curProduct < k) {
      result += j > i ? j - i + 1 : 1;
    }
    j += 1;
  }
  return result;
};

// Test case
numSubarrayProductLessThanK([10, 5, 2, 6], 100); // 8
numSubarrayProductLessThanK([1, 2, 3, 4], 25); // 10
numSubarrayProductLessThanK([1, 1, 1], 2); // 6
numSubarrayProductLessThanK([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19); // 18
numSubarrayProductLessThanK([1, 2, 3, 4, 5], 25); // 12
numSubarrayProductLessThanK([3, 3, 6, 2], 19); // 7
