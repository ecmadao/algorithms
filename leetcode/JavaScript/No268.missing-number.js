/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 *
 * Example:
 * Given nums = [0, 1, 3] return 2.
 *
 * Note:
 * Your algorithm should run in linear runtime complexity.
 * Could you implement it using only constant extra space complexity?
 *
 * 输入一个长度为 n 的数组，里面的数字应该处于 [0, n] 的范围内，但现在有缺失
 * 求缺失的数字
 * 例如，[0, 1, 3, 4, 5] 长度 为 5，缺失了 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_1 = function(nums) {
  var set = new Set(nums);
  var missing = null;
  for (var i = 0; i <= nums.length; i += 1) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 基本思路：
 * 先排序，然后二分。
 * 如果是正常的连续数据，例如 0, 1, 2, 3, 4，则 nums[i] === i
 * 否则如果有缺失，则 nums[i] 和 i 不会相等
 * 因此二分的时候，每次查看中间值 nums[mid]，如果 nums[mid] === mid，则缺失值在右侧；否则在左侧
 */
var missingNumber_2 = function(nums) {
  if (!nums.length) return -1
  if (nums.length === 1) return nums[0] === 0 ? 1 : 0
  nums.sort((n1, n2) => n1 - n2)
  if (nums[nums.length - 1] < nums.length) return nums.length

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const num = nums[mid]
    if (num === mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return nums[left] === left + 1 ? left : nums.length
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 由于异或运算（XOR）满足结合律，并且对一个数进行两次完全相同的异或运算会得到原来的数，因此我们可以通过异或运算找到缺失的数字
 */
var missingNumber_3 = function(nums) {
  let missing = nums.length

  for (let i = 0; i < nums.length; i += 1) {
    missing ^= (i ^ nums[i])
  }
  return missing
}
