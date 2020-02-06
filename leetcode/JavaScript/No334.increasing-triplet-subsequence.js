/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
 *
 * Formally the function should:
 * Return true if there exists i, j, k
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
 *
 * Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.
 *
 * Example 1:
 * Input: [1,2,3,4,5]
 * Output: true
 *
 * Example 2:
 * Input: [5,4,3,2,1]
 * Output: false
 *
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列
 * 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * AC，但空间复杂度不符合要求
 */
var increasingTriplet_1 = function(nums) {
  if (nums.length < 3) return false

  const map = nums.reduce((dict, num, i) => {
    if (i > 0) {
      dict[i] = Math.min(num, dict[i - 1])
    } else {
      dict[i] = num
    }
    return dict
  }, {})

  let max = nums[nums.length - 1]
  let i = nums.length - 2
  while (i > 0) {
    const num = nums[i]
    if (num > map[i] && num < max) return true
    max = Math.max(max, num)
    i -= 1
  }
  return false
}

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * 双指针
 */
var increasingTriplet_2 = function(nums) {
  if (nums.length < 3) return false

  let m1 = Infinity
  let m2 = Infinity

  for (const num of nums) {
    if (m1 >= num) {
      m1 = num
    } else if (m2 >= num) {
      m2 = num
    } else {
      return true
    }
  }
  return false
}
