/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of n integers nums and a target,
 * find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 *
 * Example:
 * Input: nums = [-2,0,1,3], and target = 2
 * Output: 2
 * Explanation:
 * Because there are two triplets which sums are less than 2:
 * [-2,0,1]
 * [-2,0,3]
 *
 * Follow up: Could you solve it in O(n2) runtime?
 *
 * 给定一个长度为 n 的整数数组和一个目标值 target，
 * 寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三元组  i, j, k 个数（0 <= i < j < k < n）
 *
 * 注意：支持重复元素
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((n1, n2) => n1 - n2)
  let result = 0

  const search = (i, j, base) => {
    while (i < j) {
      const sum = nums[i] + nums[j] + base
      if (sum >= target) {
        j -= 1
      } else {
        result += (j - i)
        i += 1
      }
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    search(i + 1, nums.length - 1, nums[i])
  }

  return result
}
