/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * Example:
 * Input: 43261596
 * Output: 964176192
 * Explanation:
 * 43261596 represented in binary as 00000010100101000001111010011100, return
 * 964176192 represented in binary as 00111001011110000010100101000000.
 *
 * 将十进制数字表示的二进制数 reverse 之后转换为十进制
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 先将十进制转换为二进制，再反转计算为十进制
 * 注意需要针对 32 位进行补 0
 */
var reverseBits1 = function(n) {
  const bits = [];

  while (n > 0) {
    const r = n % 2;
    bits.push(r);
    n = Math.floor(n / 2);
  }
  const offset = 32 - bits.length;

  let result = 0;
  while (bits.length) {
    const r = bits.shift();
    if (r) result += r * Math.pow(2, bits.length + offset);
  }
  return result;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 从 n 的最后一位开始，取出最后一位，替换掉 m 的最后一位，然后 n 右移，m 左移
 */
const reverseBits2 = (n) => {
  let m = 0;

  for (let i = 0; i < 32; i += 1) {
    m = m << 1;
    m = m | n & 1;
    n = n >>> 1;
  }
  return m >>> 0
};

// Test case
console.log(reverseBits2(43261596)); // 964176192
console.log(reverseBits2(1)); // 2147483648
console.log(reverseBits(4294967295)); // 4294967295
