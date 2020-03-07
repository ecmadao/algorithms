/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 *
 * Example:
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4]
 *
 * 给一个升序排列的数组和目标值，返回目标值在数组中的索引的范围
 * 例如，[5, 7, 7, 7, 8, 8, 10], target 为 7，则所有和目标值符合的索引是 1, 2, 3，范围则是 [1, 3]
 * 如果没有，则返回 [-1, -1]
 *
 * 如果只有一个目标值，比如在上述数组中查找 5，则返回 [0, 0]
 */

// 用二分法搜索
const search = (nums, target) => {
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
* @return {number[]}
*/
var searchRange = function(nums, target) {
  if (!nums.length || nums[0] > target || nums[nums.length - 1] < target) return [-1, -1]

  const index = search(nums, target)
  if (nums[index] !== target) return [-1, -1]
  let i = index
  while (nums[i] === target) i += 1
  return [index, i - 1]
}

searchRange([5, 7, 7, 8, 8, 10], 8)
searchRange([5, 7, 7, 7, 8, 8, 10], 7)
searchRange([1], 1)
searchRange([2,2], 2)
searchRange([2,2], 3)
searchRange([0,0,1,1,1,1,2,2,2,3,3,4,5,6,6,6,6,7,8], 3)