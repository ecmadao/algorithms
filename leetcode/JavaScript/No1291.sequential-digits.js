/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
 * Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
 *
 * Example 1:
 * Input: low = 100, high = 300
 * Output: [123,234]
 *
 * Example 2:
 * Input: low = 1000, high = 13000
 * Output: [1234,2345,3456,4567,5678,6789,12345]
 *
 * Constraints:
 * 10 <= low <= high <= 10^9
 *
 * 我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。
 * 请你返回由 [low, high] 范围内所有顺次数组成的 有序 列表（从小到大排序）
 */


/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 *
 * 滑动窗口
 * https://leetcode.com/articles/sequential-digits/
 */
var sequentialDigits = function(low, high) {
  if (low < high) return []

  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const digits = Array.from({ length: 9 }, (_, i) => i + 1)
  const result = []

  let min = `${low}`.length
  const max = `${high}`.length

  while (true) {
    let i = 0
    let j = 0
    while (j < min) j += 1
    if (j > max) break

    while (j <= digits.length && parseInt(digits.slice(i, j).join('')) < low) {
      i += 1
      j += 1
    }

    while (j <= digits.length && parseInt(digits.slice(i, j).join('')) <= high) {
      result.push(parseInt(digits.slice(i, j).join('')))
      j += 1
      i += 1
    }

    min += 1
  }

  return result
}
