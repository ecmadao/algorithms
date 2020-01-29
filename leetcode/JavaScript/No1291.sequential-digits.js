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
  const queue = ['1','2','3','4','5','6','7','8','9']
  const result = []

  let i = queue.indexOf(`${low}`[0])
  let interval = `${low}`.length
  let j = i + interval

  while (true) {
    if (j >= queue.length + 1) {
      if (i === 0) break
      i = 0
      interval += 1
      j = i + interval
    } else {
      const num = Number(queue.slice(i, j).join(''))
      if (num <= high && num >= low) {
        result.push(num)
        i += 1
        j += 1
      } else if (num > high) {
        i = 0
        interval += 1
        j = i + interval
      } else if (num < low) {
        i += 1
        j += 1
      }
    }
  }

  return result
}
