/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 目标元素的数量 > nums.length / 2，则排序后，数组中间值一定是目标值
 */
var majorityElement_1 = function(nums) {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums[mid];
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 因为最多的那个数字的数量 > nums.length / 2，所以我们知道，该数字的个数 m - (nums.length) 一定大于 0
 *
 * 初始化，从第一个数开始，count = 1, num = nums[0]
 * index = 1 开始遍历数组，遇到相同数字则 count++，遇到不同数字则 count--
 * count 为 0 时，从当前位的数字开始重新初始化
 */
var majorityElement_2 = function(nums) {
  let count = 1
  let num = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    if (num !== nums[i]) {
      count -= 1
      if (count === 0) {
        count = 1
        num = nums[i]
      }
    } else {
      count += 1
    }
  }
}