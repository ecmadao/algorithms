/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Follow up for "Search in Rotated Sorted Array":
 * What if duplicates are allowed?
 * Would this affect the run-time complexity? How and why?
 *
 * No33. Search in Rotated Sorted Array 的稍进化版本，这次数组内允许有重复元素
 */

/**
 * 思路：
 * 和 No33 一样即可，只需特殊处理一下数值相当的情况
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
    } else if (mid > nums[right]) {
      if (target < mid && target >= nums[left]) {
        right -= 1;
      } else {
        left += 1;
      }
    // 当数值相当时，既然中间值已经等于最右边/最左边的值，则再去那一侧寻找已经没有意义
    // 直接像反方向逼近即可
    } else if (mid === nums[right]) {
        right -= 1;
    } else if (mid === nums[left]) {
        left += 1;
    }
  }
  return index !== -1;
};
