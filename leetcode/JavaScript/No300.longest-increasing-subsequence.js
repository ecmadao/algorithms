/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 * Example:
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Note:
 * 1. There may be more than one LIS combination, it is only necessary for you to return the length.
 * 2. Your algorithm should run in O(n2) complexity.
 *
 * Follow up: Could you improve it to O(nlogn) time complexity?
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 寻找最长递增子序列
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_1 = function(nums) {
  const tmp = {}
  let result = 0

  for (let i = 0; i < nums.length; i += 1) {
    tmp[i] = 0

    let j = i - 1
    while (j >= 0) {
      if (nums[i] > nums[j]) {
        tmp[i] = Math.max(
          tmp[i],
          tmp[j]
        )
      }
      j -= 1
    }
    tmp[i] += 1
    result = Math.max(result, tmp[i])
  }

  return result
}

/**
 * @param {number[]} nums
 * @return {number}
 * 超时
 */
var lengthOfLIS_2 = function(nums) {
  const getLen = (pre, index) => {
    if (index >= nums.length) return 0

    const num = nums[index]
    let take = 0
    if (num > pre) {
      take = 1 + getLen(num, index + 1)
    }
    const untake = getLen(pre, index + 1)
    return Math.max(take, untake)
  }

  return getLen(-Infinity, 0)
}

/* ===================================== Solution 3 动态规划 ======================================== */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 动态规划 DP
 */
var lengthOfLIS_3 = function(nums) {
  if (nums.length <= 1) return nums.length

  const dp = []
  let result = 1
  for (let i = 0; i < nums.length; i += 1) {
    dp[i] = 1
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], (dp[j] || 1) + 1)
      }
    }
    result = Math.max(result, dp[i])
  }
  return result
}

/* ===================================== Solution 4 动态规划 + 二分搜索 ======================================== */

const binarySearch = (nums, target, start, end) => {
  if (!nums.length || target < nums[0]) return -1

  let i = start
  let j = end - 1
  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      i = mid + 1
    } else {
      j = mid
    }
  }

  return nums[i] < target ? i + 1 : i
}

// binarySearch([0, 2, 3, 5, 7], 4)
// binarySearch([0, 2, 3, 5, 7], 6)
// binarySearch([0, 2, 3, 5, 7], 1)
/**
* @param {number[]} nums
* @return {number}
*/
var lengthOfLIS_4 = function(nums) {
  if (nums.length <= 1) return nums.length

  const dp = []
  let len = 0
  for (const num of nums) {
    const index = binarySearch(dp, num, 0, len)
    dp[Math.max(0, index)] = num
    if (Math.max(0, index) === len) len += 1
  }

  return len
}


// Test case
console.log(lengthOfLIS_3([10,9,2,5,3,7,101,18])); // 4
console.log(lengthOfLIS_3([1,2,3,4,5,6,7,8])); // 8
console.log(lengthOfLIS_3([1, 2, 3, 0, 5,6,7,8])); // 5
console.log(lengthOfLIS_3([1, 2])); // 2
console.log(lengthOfLIS_3([2, 0])); // 1
console.log(lengthOfLIS_3([1,3,6,7,9,4,10,5,6])); // 6
