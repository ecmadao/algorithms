/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Reverse digits of an integer.
 *
 * Example:
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 *
 * 反转数字，注意处理正负号和最大/最小值边界问题
 */

 /*
  * 这题本来不想写的，因为它不适用与 JS
  * JS 中数字是 64 位浮点数而不是 32 位 int
  * 所以硬要写的话，必须专门处理一下 32 位最大/最小值的问题
  *（leetcode 检查 solution 的时候不会根据使用的语言来进行变通，所以即便在 JS 里可以大于 2147483647，也会被认为出错）
  */

 /**
 * @param {number} x
 * @return {number}
 */
const reverse_1 = (x) => {
  var multi = x < 0 ? -1 : 1;
  var num = x * multi;
  var result = Number(num.toString().split('').reverse().join(''));
  return result > 2147483647 ? 0 : result * multi;
};

const reverse_2 = (x) => {
  let result = 0;
  let remain = Math.abs(x);
  const multi = x < 0 ? -1 : 1;
  const MAX = 2147483647;

  while (remain !== 0) {
    result = result * 10 + remain % 10;
    remain = Math.floor(remain / 10);
    if (remain !== 0 && MAX / 10 < result) return 0;
  }
  return result * multi;
};
