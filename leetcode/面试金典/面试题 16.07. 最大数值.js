/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。
 *
 * 示例：
 * 输入： a = 1, b = 2
 * 输出： 2
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
  return ((a + b) + Math.abs(a - b)) / 2
}
