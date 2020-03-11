/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of non-negative integers arr, you are initially positioned at start index of the array.
 * When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.
 * Notice that you can not jump outside of the array at any time.
 *
 * Example 1:
 * Input: arr = [4,2,3,0,3,1,2], start = 5
 * Output: true
 * Explanation:
 * All possible ways to reach at index 3 with value 0 are:
 * index 5 -> index 4 -> index 1 -> index 3
 * index 5 -> index 6 -> index 4 -> index 1 -> index 3
 *
 * Example 2:
 * Input: arr = [4,2,3,0,3,1,2], start = 0
 * Output: true
 * Explanation:
 * One possible way to reach at index 3 with value 0 is:
 * index 0 -> index 4 -> index 1 -> index 3
 *
 * Example 3:
 * Input: arr = [3,0,2,1,2], start = 2
 * Output: false
 * Explanation: There is no way to reach at index 1 with value 0.
 *
 * Constraints:
 * 1 <= arr.length <= 5 * 10^4
 * 0 <= arr[i] < arr.length
 * 0 <= start < arr.length
 *
 * 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
 * 请你判断自己是否能够跳到对应元素值为 0 的 任意 下标处。
 * 注意，不管是什么情况下，你都不能跳到数组之外。
 */

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const queue = [start]
  const mark = {}

  while (queue.length) {
    let len = queue.length
    while (len) {
      const index = queue.shift()
      if (arr[index] === 0) return true

      if (index - arr[index] >= 0 && !mark[index - arr[index]]) {
        mark[index - arr[index]] = true
        queue.push(index - arr[index])
      }
      if (index + arr[index] < arr.length && !mark[index + arr[index]]) {
        mark[index + arr[index]] = true
        queue.push(index + arr[index])
      }
      len -= 1
    }
  }
  return false
}
