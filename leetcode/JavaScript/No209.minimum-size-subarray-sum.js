/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of n positive integers and a positive integer s,
 * find the minimal length of a contiguous subarray of which the sum ≥ s.
 * If there isn't one, return 0 instead.
 *
 * Example:
 * Given the array [2,3,1,2,4,3] and s = 7,
 * the subarray [4,3] has the minimal length under the problem constraint.
 *
 * More practice:
 * If you have figured out the O(n) solution,
 * try coding another solution of which the time complexity is O(n log n).
 */

/* ==================== solution 1 ==================== */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen_1 = function(s, nums) {
  let sum;
  let length = 0;
  let result = Infinity;
  for (let i = 0; i < nums.length; i += 1) {
    sum = nums[i];
    length = 1;
    if (sum >= s) return length;
    for (let j = i + 1; j < nums.length; j += 1) {
      sum += nums[j];
      length += 1;
      if (sum >= s) {
        if (length < result) result = length;
        break;
      }
    }
    if (sum < s) break;
  }
  return result === Infinity ? 0 : result;
};

/* ==================== solution 2 ==================== */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen_2 = function(s, nums) {
  if (!nums.length) return 0
  let i = 0
  let j = 1
  let sum = nums[i]
  let result = Infinity

  while (i < nums.length && j <= nums.length) {
    if (sum < s) {
      if (j === nums.length) break
      sum += nums[j]
      j += 1
    } else {
      result = Math.min(result, j - i)
      sum -= nums[i]
      i += 1
    }
  }

  return result === Infinity ? 0 : result
}