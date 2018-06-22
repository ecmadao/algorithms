/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an unsorted array of integers,
 * find the length of longest continuous increasing subsequence (subarray).
 *
 * Example:
 * Input: [1,3,5,4,7]
 * Output: 3
 * Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
 * Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
 *
 * Input: [2,2,2,2,2]
 * Output: 1
 * Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
 *
 * Note: Length of the array will not exceed 10,000.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length <= 1) return nums.length;
  let len = 1;
  let max = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i - 1]) {
      len += 1;
    } else {
      max = Math.max(max, len);
      len = 1;
    }
  }
  max = Math.max(max, len);
  return max;
};
