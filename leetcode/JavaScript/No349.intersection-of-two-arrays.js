/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two arrays, write a function to compute their intersection.
 *
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 *
 * Note:
 * Each element in the result must be unique.
 * The result can be in any order.
 *
 * 给定两个数组，编写一个函数来计算它们的交集。输出结果中的每个元素一定是唯一的
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  if (set1.size < set2.size) {
    return [...set1].filter(n => set2.has(n))
  }
  return [...set2].filter(n => set1.has(n))
}
