/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * Example1:
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation:
 * 12 contains 2 digits (even number of digits).
 * 345 contains 3 digits (odd number of digits).
 * 2 contains 1 digit (odd number of digits).
 * 6 contains 1 digit (odd number of digits).
 * 7896 contains 4 digits (even number of digits).
 * Therefore only 12 and 7896 contain an even number of digits.
 *
 * Example2:
 * Input: nums = [555,901,482,1771]
 * Output: 1
 * Explanation:
 * Only 1771 contains an even number of digits.
 *
 * 给一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.reduce((count, num) => {
    return count + (`${num}`.length % 2 === 0 ? 1 : 0)
  }, 0)
}
