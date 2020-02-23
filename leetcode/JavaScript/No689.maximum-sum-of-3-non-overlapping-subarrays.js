/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.
 * Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.
 * Return the result as a list of indices representing the starting position of each interval (0-indexed).
 * If there are multiple answers, return the lexicographically smallest one.
 *
 * Example:
 * Input: [1,2,1,2,6,7,5,1], 2
 * Output: [0, 3, 5]
 * Explanation:
 * Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
 * We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
 *
 * Note:
 * 1. nums.length will be between 1 and 20000.
 * 2. nums[i] will be between 1 and 65535.
 * 3. k will be between 1 and floor(nums.length / 3).
 *
 * 给定数组 nums 由正整数组成，找到三个互不重叠的子数组的最大和。
 * 每个子数组的长度为 k，我们要使这 3*k 个项的和最大化。
 * 返回每个区间起始索引的列表（索引从 0 开始）。如果有多个结果，返回字典序最小的一个。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * 暴力破解
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const sums = nums.reduce((list, num, i) => {
    if (i < k) {
      list.push(list.pop() + num)
    } else {
      list.push(list[list.length - 1] + num - nums[i - k])
    }
    return list
  }, [0])

  let leftIndex = null
  let centerIndex = null
  let rightIndex = null

  for (let i = k; i < nums.length - 1 - k; i += 1) {
    let left = 0
    let maxLeftIndex = 0
    while (left <= i - k) {
      if (sums[maxLeftIndex] < sums[left]) {
        maxLeftIndex = left
      }
      left += 1
    }

    let right = i + k
    let maxRightIndex = i + k
    while (right <= nums.length - k) {
      if (sums[maxRightIndex] < sums[right]) {
        maxRightIndex = right
      }
      right += 1
    }
    const sum1 = sums[i] + sums[maxLeftIndex] + sums[maxRightIndex]
    const sum2 = sums[leftIndex] + sums[centerIndex] + sums[rightIndex]

    if (
      (leftIndex === null) ||
      (sum1 > sum2) ||
      (sum1 === sum2 && maxLeftIndex + i + maxRightIndex < leftIndex + centerIndex + rightIndex)
    ) {
      leftIndex = maxLeftIndex
      centerIndex = i
      rightIndex = maxRightIndex
    }
  }

  return [leftIndex, centerIndex, rightIndex]
}
