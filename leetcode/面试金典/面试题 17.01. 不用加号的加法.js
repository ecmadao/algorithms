/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。
 *
 * 示例:
 * 输入: a = 1, b = 1
 * 输出: 2
 *
 * 提示：
 * a, b 均可能是负数或 0
 * 结果不会溢出 32 位整数
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
  while (b) {
    const sum = a ^ b
    const carry = (a & b) << 1
    a = sum
    b = carry
  }
  return a
}
