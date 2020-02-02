/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an integer array, return the k-th smallest distance among all the pairs.
 * The distance of a pair (A, B) is defined as the absolute difference between A and B.
 *
 * Example:
 * Input:
 * nums = [1,3,1], k = 1
 * Output: 0
 * Explanation:
 * Here are all the pairs:
 * (1,3) -> 2
 * (1,1) -> 0
 * (3,1) -> 2
 * Then the 1st smallest distance pair is (1,1), and its distance is 0.
 *
 * Note:
 * 1. 2 <= len(nums) <= 10000.
 * 2. 0 <= nums[i] < 1000000.
 * 3. 1 <= k <= len(nums) * (len(nums) - 1) / 2.
 *
 * 给定一个整数数组，返回所有数对之间的第 k 个最小距离。一对 (A, B) 的距离被定义为 A 和 B 之间的绝对差值
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * ==
 */
var smallestDistancePair_1 = function(nums, k) {
  nums.sort((n1, n2) => n1 - n2)

  const counter = {}

  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const diff = Math.abs(nums[i] - nums[j])
      counter[diff] = (counter[diff] || 0) + 1
    }
  }
  let num = 0
  for (let i = 0; i <= 1000000; i += 1) {
    num += (counter[i] || 0)
    if (num >= k) return i
  }
  return 0
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Binary search
 * https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance/solution/dong-yong-er-fen-cha-zhao-mo-ban-lai-qiao-miao-j-2/
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((n1, n2) => n1 - n2)

  let l = 0
  let r = nums[nums.length - 1] - nums[0]
  while (l < r) {
    const mid = Math.floor((r + l) / 2)
    let counter = 0

    for (let i = 1; i < nums.length; i += 1) {
      let j = i - 1
      while (j >= 0 && nums[i] - nums[j] <= mid) {
        j -=1
        counter += 1
      }
    }

    if (counter < k) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}
