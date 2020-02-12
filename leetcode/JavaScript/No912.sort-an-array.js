/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers nums, sort the array in ascending order
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 *
 * Constraints:
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 *
 * 给定一个整数数组 nums，将该数组升序排列
 */


const quickSort = (nums, start, end) => {
  if (end <= start) return nums
  const base = nums[start]

  let i = start
  let j = end

  while (i < j) {
    while (base <= nums[j] && j > i) j -= 1
    while (base >= nums[i] && i < j) i += 1

    if (i >= j) break
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  nums[start] = nums[i]
  nums[i] = base

  quickSort(nums, start, i - 1)
  quickSort(nums, i + 1, end)

  return nums
}

/**
* @param {number[]} nums
* @return {number[]}
*/
var sortArray = function(nums) {
  if (nums.length <= 10) return nums.sort((n1, n2) => n1 - n2)
  return quickSort(nums, 0, nums.length - 1)
}
