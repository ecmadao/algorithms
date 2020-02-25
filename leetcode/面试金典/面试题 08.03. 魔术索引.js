/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 魔术索引。
 * 在数组 A[0...n-1] 中，有所谓的魔术索引，满足条件 A[i] = i。
 * 给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组 A 中找出一个魔术索引，如果没有，则返回 -1。
 * 若有多个魔术索引，返回索引值最小的一个。
 *
 * 示例 1:
 * 输入：nums = [0, 2, 3, 4, 5]
 * 输出：0
 * 说明: 0下标的元素为0
 *
 * 示例 2:
 * 输入：nums = [1, 1, 1]
 * 输出：1
 *
 * 提示:
 * 1. nums长度在[1, 1000000]之间
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * O(logn) 速度
 */
var findMagicIndex = function(nums) {
  if (!nums.length) return -1

  let i = 0
  let j = nums.length

  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    if ((nums[mid] - mid) * (nums[i] - i) <= 0) {
      j = mid
    } else {
      i = mid + 1
    }
  }

 return i < nums.length ? i : -1
}
