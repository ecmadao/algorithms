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
 */
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, Math.pow(2, 31) - 1), -Math.pow(2, 31))
}
