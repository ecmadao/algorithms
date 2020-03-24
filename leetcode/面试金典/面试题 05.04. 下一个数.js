/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 下一个数。给定一个正整数，找出与其二进制表达式中1的个数相同且大小最接近的那两个数（一个略大，一个略小）。
 *
 * 示例1:
 * 输入：num = 2（或者0b10）
 * 输出：[4, 1] 或者（[0b100, 0b1]）
 *
 * 示例2:
 * 输入：num = 1
 * 输出：[2, -1]
 *
 * 提示:
 * 1. num 的范围在[1, 2147483647]之间；
 * 2. 如果找不到前一个或者后一个满足条件的正数，那么输出 -1
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {
  const arr = (num).toString(2).split('')
  const res = []

  let i = arr.length - 1
  let min = false
  let max = false
  while (i >= 0) {
    if (arr[i] === '1' && arr[i + 1] === '0' && !min) {
      res.push(parseInt(
        arr.slice(0, i).join('') + '01' + arr.slice(i + 2).sort((n1, n2) => n2 - n1).join(''),
        2
      ))
      min = true
    }
    if (arr[i] === '1' && arr[i - 1] === '0' && !max) {
      res.unshift(parseInt(
        arr.slice(0, i - 1).join('') + '10' + arr.slice(i + 1).sort().join(''),
        2
      ))
      max = true
    }
    if (min && max) break
    i -= 1
  }
  if (!max) {
    res.unshift(parseInt(
      '10' + arr.slice(1).sort().join(''),
      2
    ))
  }
  if (!min) res.push(-1)
  return res
}
