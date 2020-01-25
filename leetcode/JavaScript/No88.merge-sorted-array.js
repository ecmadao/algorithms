/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n)
 * to hold additional elements from nums2.
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 *
 * 给出两个排好序的数组 nums1, nums2，要求把 nums1 的前 m 个元素和 nums2 的前 n 个元素合并，并直接修改 nums1
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let index = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[index] = nums1[i]
      i -= 1
    } else {
      nums1[index] = nums2[j]
      j -= 1
    }
    index -= 1
  }

  while (j >= 0) {
    nums1[j] = nums2[j]
    j -= 1
  }
}
