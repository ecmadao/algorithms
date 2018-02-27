/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 *
 * 已知一个升序排列的数组，例如 [0, 1, 2, 4, 5, 6, 7]，将它首位连接成为一个环，旋转一定角度以后，从某点切断，
 * 然后成为例如 [4, 5, 6, 7, 0, 1, 2] 的数组。求在这个数组中（[4, 5, 6, 7, 0, 1, 2]）搜索某值找到的索引，没有则返回 -1
 */

/**
 * 思路：
 * 观察可知，将数组连接、旋转、切断之后，新生成的数组由两部分组成：
 * 1. 两部分都是升序排列
 * 2. 一部分的各个值全部大于另一部分的各值
 *
 * 如果我们使用二分查找法，从数组中心开始查找：
 * 1. 如果中间值 mid 小于最右侧的值 right，则右侧升序排列
 *    1. 如果目标值 target 大于 mid 且小于等于 right，则 target 位于 mid 的右侧，
 *        因此，左侧索引 += 1，让 mid 向右侧靠拢
 *    2. 反之，target 位于 mid 左侧，右侧索引 -= 1，让 mid 向左侧靠拢
 * 2. 如果 mid 不小于 right，则左侧的值都大于右侧的值（左侧也是升序排列）
 *    1. 如果 target 小于 mid 且 大于等于 left，则 target 位于 mid 左侧，
 *        因此，右侧索引 -= 1，让 mid 向左靠拢
 *    2. 反之，左侧索引 += 1，让 mid 向右靠拢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var index = -1;
  var left = 0;
  var right = nums.length - 1;

  while(left <= right) {
    var midIndex = Math.floor((left + right) / 2);
    var mid = nums[midIndex];
    if (mid === target) {
      index = midIndex;
      break;
    } else if (mid < nums[right]) {
      if (target > mid && target <= nums[right]) {
        left += 1;
      } else {
        right -= 1;
      }
    } else {
      if (target < mid && target >= nums[left]) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
  return index;
};