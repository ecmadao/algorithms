/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an array of integers arr and an integer d. In one step you can jump from index i to index:
 * 1. i + x where: i + x < arr.length and 0 < x <= d.
 * 2. i - x where: i - x >= 0 and 0 < x <= d.
 * In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] for all indices k between i and j (More formally min(i, j) < k < max(i, j)).
 *
 * You can choose any index of the array and start jumping. Return the maximum number of indices you can visit.
 * Notice that you can not jump outside of the array at any time.
 *
 * Example 1:
 * Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
 * Output: 4
 * Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
 * Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 > 9.
 * You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
 * Similarly You cannot jump from index 3 to index 2 or index 1.
 *
 * Example 2:
 * Input: arr = [3,3,3,3,3], d = 3
 * Output: 1
 * Explanation: You can start at any index. You always cannot jump to any index.
 *
 * Example 3:
 * Input: arr = [7,6,5,4,3,2,1], d = 1
 * Output: 7
 * Explanation: Start at index 0. You can visit all the indicies. 
 *
 * Example 4:
 * Input: arr = [7,1,7,1,7,1], d = 2
 * Output: 2
 *
 * Example 5:
 * Input: arr = [66], d = 1
 * Output: 1
 *
 * Constraints:
 * 1. 1 <= arr.length <= 1000
 * 2. 1 <= arr[i] <= 10^5
 * 3. 1 <= d <= arr.length
 *
 * 给你一个整数数组 arr 和一个整数 d 。每一步你可以从下标 i 跳到：
 * 1. i + x ，其中 i + x < arr.length 且 0 < x <= d 。
 * 2. i - x ，其中 i - x >= 0 且 0 < x <= d 。
 * 除此以外，你从下标 i 跳到下标 j 需要满足：arr[i] > arr[j] 且 arr[i] > arr[k] ，其中下标 k 是所有 i 到 j 之间的数字（更正式的，min(i, j) < k < max(i, j)）。
 *
 * 你可以选择数组的任意下标开始跳跃。请你返回你 最多 可以访问多少个下标。
 * 请注意，任何时刻你都不能跳到数组的外面。
 */

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  const cache = {}
  const dfs = (index) => {
    if (cache[index] !== undefined) return cache[index]

    let res = 1
    for (let i = 1; i <= d; i += 1) {
      const j = index - i
      if (j < 0) break
      if (arr[j] >= arr[index]) break
      res = Math.max(res, 1 + dfs(j))
    }
    for (let i = 1; i <= d; i += 1) {
      const j = index + i
      if (j >= arr.length) break
      if (arr[j] >= arr[index]) break
      res = Math.max(res, 1 + dfs(j))
    }
    cache[index] = res
    return res
  }

  return Math.max(
    ...arr.map((_, i) => dfs(i))
  )
}
