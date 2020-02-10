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
 *
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积
 * 不要使用除法，且在 O(n) 时间复杂度内完成
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_1 = function(nums) {
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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_3 = function(nums) {
  const left = nums.reduce((list, _, i) => {
    if (i === 0) {
      list.push(1)
    } else {
      list.push(list[list.length - 1] * nums[i - 1])
    }
    return list
  }, [])
  const right = []
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (i === nums.length - 1) {
      right.unshift(1)
    } else {
      right.unshift(right[0] * nums[i + 1])
    }
  }
  return Array.from({ length: nums.length }, (_, i) => left[i] * right[i])
}


/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * 常数空间复杂度（返回的数组不计入额外空间）
 */
var productExceptSelf_4 = function(nums) {
  const result = nums.reduce((list, _, i) => {
    if (i === 0) {
      list.push(1)
    } else {
      list.push(list[list.length - 1] * nums[i - 1])
    }
    return list
  }, [])

  let rightProduct = 1
  let i = nums.length - 1
  while (i >= 0) {
    const num = i + 1 === nums.length ? 1 : nums[i + 1]
    result[i] *= num * rightProduct
    rightProduct *= num
    i -= 1
  }
  return result
}
