/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * The algorithm should run in linear time and in O(1) space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (!nums.length) return [];
  nums.sort((a, b) => a - b);
  let pre = nums[0];
  let count = 1;
  const result = [];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === pre) {
      count += 1;
    } else {
      if (count > nums.length / 3) result.push(pre);
      pre = nums[i];
      count = 1;
    }
  }
  if (count > nums.length / 3) {
    result.push(pre);
  }
  return result;
};
