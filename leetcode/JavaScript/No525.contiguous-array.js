/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
 *
 * Example 1:
 * Input: [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 *
 * Example 2:
 * Input: [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 * Note: The length of the given binary array will not exceed 50,000.
 *
 * 给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 暴力破解
 */
var findMaxLength_1 = function(nums) {
  const map = [0,0]
  let j = 0
  let res = 0

  while (j < nums.length) {
    const num = nums[j]
    map[num] += 1

    if (map[0] === map[1]) {
      res = j + 1
    } else if (map[num] < map[num ^ 1] && map[num] * 2 > res) {
      let zero = map[0]
      let one = map[1]
      let i = 0
      while (i < j - 1 && zero !== one && (j - i + 1) > res) {
        if (nums[i] === 0) {
          zero -= 1
        } else {
          one -= 1
        }
        i += 1
      }
      if (zero === one) res = Math.max(res, j - i + 1)
    }
    j += 1
  }

  return res
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 将 0 转化为 -1，则原题变为：数组中最长和为 0 的连续子数组的长度
 * 运用前缀和求值
 */
var findMaxLength_2 = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) nums[i] = -1
  }

  const map = { 0: 0 }
  const sums = [0]
  for (let i = 0; i < nums.length; i += 1) {
    const sum = sums[sums.length - 1] + nums[i]
    if (map[sum] !== undefined) {
      res = Math.max(i + 1 - map[sum], res)
    } else {
      map[sum] = i + 1
    }
    sums.push(sum)
  }
  return res
}
