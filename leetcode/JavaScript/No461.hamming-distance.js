/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 *
 * Example:
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 *
 * Note:
 * 0 ≤ x, y < 2^31.
 *
 * 汉明距离：两个字符串对应位置的不同字符的个数。换句话说，它就是将一个字符串变换成另外一个字符串所需要替换的字符个数。
 * 对于两个二进制数字而言，可以通过按位异或获取其汉明距离
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const n = (x ^ y).toString(2);
  let result = 0;
  for (const i of n) {
    if (i === '1') result += 1;
  }
  return result;
}
