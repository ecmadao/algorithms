/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 *
 * Example:
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Note:
 * Please solve it without division and in O(n).
 *
 * Follow up:
 * Could you solve it with constant space complexity?
 * (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const tmp = []
  const result = []

  let pre = 1
  for (const num of nums) {
    tmp.push(pre)
    pre *= num
  }

  pre = 1
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const num = nums[i]
    result.unshift(pre * tmp[i])
    pre *= num
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_2 = function(nums) {
  let pre = []
  let next = []
  const result = []
  const getNum = (arr, index) => arr[index] === undefined ? 1 : arr[index]

  let start = 0
  let end = nums.length - 1

  while (start < nums.length && end >= 0) {
    pre[start] = getNum(pre, start - 1) * getNum(nums, start - 1)
    next[end] = getNum(next, end + 1) * getNum(nums, end + 1)
    result[start] = getNum(pre, start) * getNum(next, start)
    result[end] = getNum(pre, end) * getNum(next, end)

    start += 1
    end -= 1
  }
  return result
}
