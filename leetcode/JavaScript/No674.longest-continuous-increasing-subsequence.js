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
  let result = 0

  let tmp = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      tmp += 1
    } else {
      result = Math.max(result, tmp)
      tmp = 1
    }
  }
  return Math.max(result, tmp)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS_2 = function(nums) {
  let result = 0
  let tmp = 0
  let i = 0

  while (i < nums.length && result < (tmp + nums.length - i)) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      tmp += 1
    } else {
      result = Math.max(result, tmp)
      tmp = 1
    }
    i += 1
  }
  return Math.max(result, tmp)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS_3 = function(nums) {
  let result = 0
  let start = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (i && nums[i - 1] >= nums[i]) start = i
    result = Math.max(result, i - start + 1)
  }
  return result
}
