/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * The gray code is a binary numeral system where two successive values differ in only one bit.
 * Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.
 *
 * Example 1:
 * Input: 2
 * Output: [0,1,3,2]
 * Explanation:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 * For a given n, a gray code sequence may not be uniquely defined.
 * For example, [0,2,3,1] is also a valid gray code sequence.
 * 00 - 0
 * 10 - 2
 * 11 - 3
 * 01 - 1
 *
 * Example 2:
 * Input: 0
 * Output: [0]
 * Explanation:
 * We define the gray code sequence to begin with 0.
 * A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
 * Therefore, for n = 0 the gray code sequence is [0].
 *
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 * 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
 * 格雷码：https://zh.wikipedia.org/wiki/%E6%A0%BC%E9%9B%B7%E7%A0%81
 */

/**
 * @param {number} n
 * @return {number[]}
 *
 * 公式法
 */
var grayCode = function(n) {
  return Array.from({ length: Math.pow(2, n) }, (v, i) => (i >> 1) ^ i)
}

/**
 * @param {number} n
 * @return {number[]}
 *
 * 根据格雷代码生成规律：
 * 以二进制为 0 值的格雷码为第零项，第一项改变最右边的位元，第二项改变右起第一个为1的位元的左边位元，第三、四项方法同第一、二项，如此反复，即可排列出n个位元的格雷码。
 * 以 n = 2 为例，即：
 * 0 0 第零项初始化为 0
 * 0 1 第一项改变上一项最右边的位元
 * 1 1 第二项改变上一项右起第一个为 1 的位元的左边位
 * 1 0 第三项同第一项，改变上一项最右边的位元
 */
