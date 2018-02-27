/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the contiguous subarray within an array (containing at least one number)
 * which has the largest product.
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums.length) return null;
  let maxPre = nums[0];
  let minPre = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    const maxhere = Math.max(Math.max(maxPre * num, minPre * num), num);
    const minhere = Math.min(Math.min(maxPre * num, minPre * num), num);
    max = Math.max(max, maxhere);
    maxPre = maxhere;
    minPre = minhere;
  }
  return max;
};
