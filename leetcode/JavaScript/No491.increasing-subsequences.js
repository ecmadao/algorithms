/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2.
 *
 * Example:
 * Input: [4, 6, 7, 7]
 * Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 *
 * Note:
 * 1. The length of the given array will not exceed 15.
 * 2. The range of integer in the given array is [-100,100].
 * 3. The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2
 * 注意，需要求子序列，即元素相互位置不能改变
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = []
  if (nums.length < 2) return result

  const getSubsequences = (index, list) => {
    if (list.length > 1) {
      result.push([...list])
    }
    const tmp = {}
    for (let i = index; i < nums.length; i += 1) {
      if (tmp[nums[i]]) continue
      if (list.length === 0 || nums[i] >= list.slice(-1)[0]) {
        tmp[nums[i]] = 1
        getSubsequences(i + 1, [...list, nums[i]])
      }
    }
  }

  getSubsequences(0, [])
  return result
}
