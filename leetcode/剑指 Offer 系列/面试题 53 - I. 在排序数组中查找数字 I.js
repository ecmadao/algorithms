/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 统计一个数字在排序数组中出现的次数。
 *
 * 示例 1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: 2
 *
 * 示例 2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: 0
 *
 * 限制：
 * 1. 0 <= 数组长度 <= 50000
 * 2. 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */


const _search = (nums, target) => {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (nums[mid] >= target) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return i
}

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {
  if (!nums.length || nums[0] > target || nums[nums.length - 1] < target) return 0

  const index = _search(nums, target)
  if (nums[index] !== target) return 0
  let i = index
  while (nums[i] === target) i += 1
  return i - index
}
