/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement atoi to convert a string to an integer.
 *
 * Hint:
 * Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.
 *
 * Notes:
 * It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
 * 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 。
 *
 * 把字符串转换为数字
 */

 /**
 * @param {string} str
 * @return {number}
 * 抖机灵
 */
var myAtoi_1 = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, Math.pow(2, 31) - 1), -Math.pow(2, 31))
}

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi_2 = function(str) {
  str = str.trim()

  let minus = 1
  let result = 0
  for (let i = 0; i < str.length; i += 1) {
    const s = str[i]
    if (/[0-9]/.test(s)) {
        result = result * 10 + parseInt(s)
    } else {
      if (
        (s === '-' || s === '+') && i === 0
      ) {
        minus = s === '-' ? -1 : 1
      } else {
        break
      }
    }
  }
  result = minus * result
  if (result < -Math.pow(2, 31)) return -Math.pow(2, 31)
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
  return result
}

// Test case
console.log(
  myAtoi_2("  0000000000012345678") // 12345678
)
console.log(
  myAtoi_2("   -42") // -42
)
console.log(
  myAtoi_2("words and 98 7") // 98
)
