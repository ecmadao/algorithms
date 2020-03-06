/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 *
 * 示例 1：
 * 输入：target = 9
 * 输出：[[2,3,4],[4,5]]
 *
 * 示例 2：
 * 输入：target = 15
 * 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 *
 * 限制：
 * 1. 1 <= target <= 10^5
 */

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  if (target === 1) return []

  let sum = 0
  let i = 1
  let j = 1
  const result = []

  while (j <= Math.ceil(target / 2)) {
    sum += j
    while (sum > target && i < j) { sum -= i; i += 1 }
    if (sum === target) {
      result.push(
        Array.from({ length: j + 1 - i }, (_, index) => index + i)
      )
    }
    j += 1
  }

  return result
}
