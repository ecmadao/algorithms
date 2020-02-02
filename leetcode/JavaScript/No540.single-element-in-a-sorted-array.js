/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given a sorted array consisting of only integers where every element appears exactly twice,
 * except for one element which appears exactly once. Find this single element that appears only once.
 *
 * Example 1:
 * Input: [1,1,2,3,3,4,4,8,8]
 * Output: 2
 *
 * Example 2:
 * Input: [3,3,7,7,10,11,11]
 * Output: 10
 *
 * Note:
 * Your solution should run in O(log n) time and O(1) space.
 *
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let i = 0
  while (i < nums.length - 1) {
    if (nums[i] !== nums[i + 1]) return nums[i]
    i += 2
  }
  return nums[nums.length - 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 二分法
 * 包含有单个元素的数组，个数一定是奇数
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/solution/you-xu-shu-zu-zhong-de-dan-yi-yuan-su-by-leetcode/
 */
var singleNonDuplicate_2 = function(nums) {
  if (nums.length === 1) return nums[0]

  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((j + i) / 2)

    if (nums[mid] === nums[mid + 1]) {
      const right = j + 1 - mid
      if (right % 2 === 1) {
        i = mid
      } else {
        j = mid - 1
      }
    } else if (nums[mid] === nums[mid - 1]) {
      const left = mid - i + 1
      if (left % 2 === 1) {
        j = mid
      } else {
        i = mid + 1
      }
    } else {
      return nums[mid]
    }
  }
}
