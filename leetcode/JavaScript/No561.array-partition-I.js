/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer,
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *
 * Example:
 * Input: [1,4,3,2]
 * Output: 4
 * Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 *
 * Note:
 * 1. n is a positive integer, which is in the range of [1, 10000].
 * 2. All the integers in the array will be in the range of [-10000, 10000].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let result = 0;
  while (i < nums.length) {
    result += Math.min(nums[i], nums[i + 1]);
    i += 2;
  }
  return result;
};

// Test case
console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([100, 4, 5, 0, 3, 2, 1, 11])); // 17