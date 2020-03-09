/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array.
 * Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.
 *
 * Example 1:
 * Input: [3, 1, 4, 1, 5], k = 2
 * Output: 2
 * Explanation:
 * There are two 2-diff pairs in the array, (1, 3) and (3, 5).
 * Although we have two 1s in the input, we should only return the number of unique pairs.
 *
 * Example 2:
 * Input:[1, 2, 3, 4, 5], k = 1
 * Output: 4
 * Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
 *
 * Example 3:
 * Input: [1, 3, 1, 5, 4], k = 0
 * Output: 1
 * Explanation: There is one 0-diff pair in the array, (1, 1).
 *
 * Note:
 * 1. The pairs (i, j) and (j, i) count as the same pair.
 * 2. The length of the array won't exceed 10,000.
 * 3. All the integers in the given input belong to the range: [-1e7, 1e7].
 *
 * 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  nums.sort((n1, n2) => n1 - n2)

  let i = 0
  let j = 0
  let count = 0

  while (j < nums.length) {
    while (j < nums.length && nums[j] - nums[i] < k) j += 1
    while (j + 1 < nums.length && nums[j] === nums[j + 1]) j += 1
    if (j === i) {
      j += 1
      continue
    }
    if (j === nums.length) break

    if (nums[j] - nums[i] === k) {
      count += 1
      while (i < j && nums[j] - nums[i] === k) i += 1
    } else {
      while (i < j && nums[j] - nums[i] > k) i += 1
    }
  }
  return count
}

// 1, 1, 3, 4, 5