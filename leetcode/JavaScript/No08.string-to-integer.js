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
 *
 * 把字符串转换为数字
 * 比较无聊的题目
 */

 /**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};