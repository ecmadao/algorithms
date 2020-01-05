/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the contiguous subarray within an array (containing at least one number)
 * which has the largest product.
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums.length) return null
  let maxPre = nums[0]
  let minPre = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i]
    const maxhere = Math.max(Math.max(maxPre * num, minPre * num), num)
    const minhere = Math.min(Math.min(maxPre * num, minPre * num), num)
    max = Math.max(max, maxhere)
    maxPre = maxhere
    minPre = minhere
  }
  return max
}

/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/maximum-product-subarray/discuss/48230/Possibly-simplest-solution-with-O(n)-time-complexity
 */
var maxProduct_2 = function(nums) {
  if (!nums.length) return null
  let maxTmp = minTmp = max = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i]
    if (num < 0) {
      const tmp = maxTmp
      maxTmp = minTmp
      minTmp = tmp
    }
    maxTmp = Math.max(maxTmp * num, num)
    minTmp = Math.min(minTmp * num, num)

    max = Math.max(max, maxTmp)
  }
  return max
}
