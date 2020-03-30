/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
 *
 * 示例 1:
 * 输入: nums = [5,6,5], target = 11
 * 输出: [[5,6]]
 *
 * 示例 2:
 * 输入: nums = [5,6,5,6], target = 11
 * 输出: [[5,6],[5,6]]
 *
 * 提示：
 * nums.length <= 100000
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {
  nums.sort((n1, n2) => n1 - n2)
  const res = []

  let i = 0
  let j = nums.length - 1
  while (i < j) {
    const sum = nums[i] + nums[j]
    if (sum === target) {
      res.push([nums[i], nums[j]])
      i += 1
      j -= 1
    } else if (sum < target) {
      i += 1
    } else {
      j -= 1
    }
  }
  return res
}
