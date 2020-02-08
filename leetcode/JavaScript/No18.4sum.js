/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 * given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *    [-1,  0, 0, 1],
 *    [-2, -1, 1, 2],
 *    [-2,  0, 0, 2]
 * ]
 *
 * 四数求和，类似于之前的三数求和，只是注意处理重复值的问题
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((n1, n2) => n1 - n2)
  const result = []

  // 利用双指针
  const findSum = (start, end, num, arr) => {
    let i = start
    let j = end
    while (i < j) {
      const sum = nums[i] + nums[j]
      if (sum <= num) {
        if (sum === num) result.push([...arr, nums[i], nums[j]])
        while (i < end && nums[i] === nums[i + 1]) i += 1
        i += 1
      } else {
        while (j > start && nums[j] === nums[j - 1]) j -= 1
        j -= 1
      }
    }
  }

  for (let i = 0; i < nums.length - 3; i += 1) {
    if (nums[i] === nums[i - 1]) continue

    for (let j = nums.length - 1; j > i + 2; j -= 1) {
      if (nums[j] === nums[j + 1]) continue
      const remain = target - nums[i] - nums[j]
      findSum(i + 1, j - 1, remain, [nums[i], nums[j]])
    }
  }
  return result
}
