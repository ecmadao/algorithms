/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-negative integer, you could swap two digits at most once to get the maximum valued number.
 * Return the maximum valued number you could get.
 *
 * Example:
 * Input: 2736
 * Output: 7236
 * Explanation: Swap the number 2 and the number 7.
 *
 * Input: 9973
 * Output: 9973
 * Explanation: No swap.
 *
 * Note: The given number is in the range [0, 10^8]
 *
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  if (num < 10) return num

  const str = `${num}`.split('')
  let i = str.length - 1

  const tmp = []
  tmp[i] = [str[i], i]
  i -= 1
  // 从后向前遍历，寻找每一位往后最大的值和 index
  while (i >= 0) {
    const num = str[i]
    if (tmp[i + 1][0] >= num) {
      tmp[i] = [...tmp[i + 1]]
    } else {
      tmp[i] = [num, i]
    }
    i -= 1
  }
  for (let i = 0; i < tmp.length; i += 1) {
    if (tmp[i][0] === str[i]) continue
    const data = str[i]
    str[i] = str[tmp[i][1]]
    str[tmp[i][1]] = data
    return parseInt(str.join(''))
  }
  return num
}

// Test case
console.log(maximumSwap(9918)); // 9981
console.log(maximumSwap(9981)); // 9981
console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(1993)); // 9913
console.log(maximumSwap(1893)); // 9813
console.log(maximumSwap(98368)); // 98863
