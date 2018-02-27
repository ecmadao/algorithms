/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Follow up for "Remove Duplicates":
 * What if duplicates are allowed at most twice?
 *
 * Example:
 * Given sorted array nums = [1,1,1,2,2,3],
 * Your function should return length = 5,
 * with the first five elements of nums being 1, 1, 2, 2 and 3.
 * It doesn't matter what you leave beyond the new length.
 *
 * 从已排序的数组中去除重复元素，但每个元素最多可以出现 2 次
 */

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
  var tmp = {};
  for (i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (!tmp[num]) {
      tmp[num] = 1;
      continue;
    }
    if (tmp[num] === 2) {
      nums.splice(i, 1);
      i--;
      continue;
    }
    tmp[num] += 1;
  }
  return nums.length;
};