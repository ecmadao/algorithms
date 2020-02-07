/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity.
 * Could you implement it without using extra memory?
 *
 * 在一个数组中，除了一个元素以外，其他都出现了两次，求出这个元素
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber_1 = function(nums) {
  let single = null
  const map = new Map()

  for (const num of nums) {
    const count = (map.get(num) || 0) + 1
    map.set(num, count)

    if (count === 1) {
      single = num
    } else {
      map.delete(num)
      single = null
    }
  }
  return single
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 异或 XOR 操作。原理：
 * A ^ B ^ B === A
 * 因为数组中，除了目标值以外，其他数字都重复了两次，
 * 因此，累计异或的最终结果就是目标值
 */
var singleNumber_2 = function(nums) {
  let result = nums[0]
  for (let i = 1; i < nums.length; i += 1) {
    result = result ^ nums[i]
  }
  return result
}
