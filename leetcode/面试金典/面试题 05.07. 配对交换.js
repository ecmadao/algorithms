/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。
 *
 * 示例 1:
 * 输入：num = 2（或者0b10）
 * 输出 1 (或者 0b01)
 *
 * 示例 2:
 * 输入：num = 3
 * 输出：3
 *
 * 提示:
 * num 的范围在[0, 2^30 - 1]之间，不会发生整数溢出。
 */

/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
  return ((num & 0x55555555) << 1) | ((num & 0xaaaaaaaa) >> 1)
}
