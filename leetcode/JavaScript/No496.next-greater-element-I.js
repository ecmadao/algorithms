/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
 * Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
 * The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
 * If it does not exist, output -1 for this number.
 *
 * Example 1:
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * Output: [-1,3,-1]
 * Explanation:
 *    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
 *    For number 1 in the first array, the next greater number for it in the second array is 3.
 *    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
 *
 * Example 2:
 * Input: nums1 = [2,4], nums2 = [1,2,3,4].
 * Output: [3,-1]
 * Explanation:
 *    For number 2 in the first array, the next greater number for it in the second array is 3.
 *    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
 *
 * Note:
 * 1. All elements in nums1 and nums2 are unique.
 * 2. The length of both nums1 and nums2 would not exceed 1000.
 *
 * 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * 单调递增栈
 */
var nextGreaterElement = function(nums1, nums2) {
  const queue = []
  const tmp = {}

  for (let i = nums2.length - 1; i >= 0; i -= 1) {
    const n2 = nums2[i]
    while (queue.length) {
      const num = queue[0]
      if (num < n2) {
        queue.shift()
      } else {
        break
      }
    }
    tmp[n2] = queue.length ? queue[0] : -1
    queue.unshift(n2)
  }

  return nums1.map(n => tmp[n])
}
