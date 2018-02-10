/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array nums,
 * write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Example:
 * Given nums = [0, 1, 0, 3, 12], after calling your function,
 * nums should be [1, 3, 12, 0, 0].
 *
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const zeroIndexs = [];
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (num === 0) {
      zeroIndexs.push(i);
    } else if (num !== 0 && zeroIndexs.length) {
      const zIndex = zeroIndexs.shift();
      nums[zIndex] = num;
      nums[i] = 0;
      zeroIndexs.push(i);
    }
  }
};
