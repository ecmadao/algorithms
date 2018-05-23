/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 * Example:
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Note:
 * 1. There may be more than one LIS combination, it is only necessary for you to return the length.
 * 2. Your algorithm should run in O(n2) complexity.
 *
 * Follow up: Could you improve it to O(n log n) time complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) return nums.length;

  const tmp = {
    0: 1
  };
  let result = 1;
  for (let i = 1; i < nums.length; i += 1) {
    let j = i - 1;
    tmp[i] = 1
    const num = nums[i];
    while (j >= 0) {
      const J = nums[j];
      if (num === J) {
        tmp[i] = tmp[j];
        break;
      }
      if (J < num) {
        tmp[i] = Math.max(tmp[j] + 1, tmp[i]);
        result = Math.max(result, tmp[i]);
        if (num - 1 === J) break;
      }
      j -= 1;
    }
  }
  return result;
};

// Test case
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
console.log(lengthOfLIS([1,2,3,4,5,6,7,8])); // 8
console.log(lengthOfLIS([1, 2, 3, 0, 5,6,7,8])); // 5
console.log(lengthOfLIS([1, 2])); // 2
console.log(lengthOfLIS([2, 0])); // 1
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6])); // 6
