/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array with n objects colored red, white or blue,
 * sort them so that objects of the same color are adjacent,
 * with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 *
 * Note:
 * You are not suppose to use the library's sort function for this problem.
 *
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * First, iterate the array counting number of 0's, 1's, and 2's,
 * then overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with an one-pass algorithm using only constant space?
 *
 * 一个数组内有 0, 1, 2 这三种元素，每个元素重复多次，且它们的排序是混乱的。现要求不使用 sort 方法，直接修改原数组，
 * 使得原数组内数字按照 0, 1, 2 的顺序排列
 * [1, 2, 2, 1, 0, 2, 0] -> [0, 0, 1, 1, 2, 2, 2]
 */

/**
 * 思路：
 * 计数排序：https://zh.wikipedia.org/zh-cn/计数排序
 */

var update = function(temp, nums, index, key) {
  while (temp[key] > 0) {
    nums[index] = key;
    temp[key] -= 1;
    index += 1;
  }
  return index;
};

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var sortColors = function(nums) {
  var temp = {};
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    temp[num] = temp[num] === undefined ? 1 : temp[num] + 1;
  }
  var index = 0;
  index = update(temp, nums, index, 0);
  index = update(temp, nums, index, 1);
  index = update(temp, nums, index, 2);
};


