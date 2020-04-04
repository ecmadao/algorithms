/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * 示例 1:
 * 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
 * 输出: 2
 *
 * 限制：
 * 1 <= 数组长度 <= 50000
 *
 * 注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1
  let num = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== num) {
      count -= 1
      if (!count) {
        count = 1
        num = nums[i]
      }
    } else {
      count += 1
    }
  }

  return num
}
