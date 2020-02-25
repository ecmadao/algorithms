/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
 * After doing so, return the array.
 *
 * Example 1:
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 *
 * Constraints:
 * 1. 1 <= arr.length <= 10^4
 * 2. 1 <= arr[i] <= 10^5
 *
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 * 完成所有替换操作后，请你返回这个数组
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  if (!arr.length) return []

  let max = arr[arr.length - 1]
  arr[arr.length - 1] = -1
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    const num = arr[i]
    arr[i] = max
    max = Math.max(num, max)
  }
  return arr
}
