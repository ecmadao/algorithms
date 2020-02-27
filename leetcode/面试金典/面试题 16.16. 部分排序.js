/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一个整数数组，编写一个函数，找出索引 m 和 n，只要将索引区间 [m,n] 的元素排好序，整个数组就是有序的。
 * 注意：n-m 尽量最小，也就是说，找出符合条件的最短序列。函数返回值为 [m,n]，若不存在这样的 m 和 n（例如整个数组是有序的），请返回 [-1,-1]。
 *
 * 示例：
 * 输入： [1,2,4,7,10,11,7,12,6,7,16,18,19]
 * 输出： [3,9]
 *
 * 提示：
 * 1. 0 <= len(array) <= 1000000
 */

/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
  if (array.length <= 1) return [-1, -1]

  let end = 1
  let min = Infinity
  let max = -Infinity
  let result = []

  while (end < array.length) {
    if (array[end] < array[end - 1]) {

      min = array[end]
      max = array[end]

      let j = end + 1
      while (j < array.length) {
        const num = array[j]
        if (num >= max) {
          if (j >= array.length || num <= array[j + 1]) break
        }
        min = Math.min(min, num)
        max = Math.max(max, num)
        j += 1
      }

      let i = end - 1
      while (i >= 0 && array[i] > min) i -= 1
      i += 1

      if (!result.length) {
        result = [i, j - 1]
      } else {
        result = [Math.min(i, result[0]), j - 1]
      }

      end = j + 2
    } else {
        end += 1
    }
  }

  return result.length === 0 ? [-1, -1] : result
}
