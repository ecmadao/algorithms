/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * Find the minimum element.
 * You may assume no duplicate exists in the array.
 *
 * 已知一个排列好的数组，现首位连接后，在任意位置切断，成为新的数组。求新数组中的最小值。
 * 只要找到最低点即可。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let pre = nums[0];
  let min = null;
  for (let i = 1; i < nums.length - 1; i += 1) {
    const num = nums[i];
    if (pre > num && num < nums[i + 1]) {
      min = num;
      break;
    }
    pre = num;
  }
  if (min === null) {
    min = Math.min(nums[0], nums[nums.length - 1]);
  }
  return min;
};
