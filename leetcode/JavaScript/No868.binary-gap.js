/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.
 * If there aren't two consecutive 1's, return 0.
 *
 * Example 1:
 * Input: 22
 * Output: 2
 * Explanation:
 * 22 in binary is 0b10110.
 * In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
 * The first consecutive pair of 1's have distance 2.
 * The second consecutive pair of 1's have distance 1.
 * The answer is the largest of these two distances, which is 2.
 *
 * Example 2:
 * Input: 5
 * Output: 2
 * Explanation:
 * 5 in binary is 0b101.
 *
 * Example 3:
 * Input: 6
 * Output: 1
 * Explanation:
 * 6 in binary is 0b110.
 *
 * Example 4:
 * Input: 8
 * Output: 0
 * Explanation:
 * 8 in binary is 0b1000.
 * There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.
 *
 * Note:
 * 1 <= N <= 10^9
 *
 * 给定一个正整数 N，找到并返回 N 的二进制表示中两个连续的 1 之间的最长距离。
 * 如果没有两个连续的 1，返回 0
 */

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  const S = N.toString(2)
  let i = 0
  let j = 1
  let res = 0
  while (j < S.length) {
    if (S[j] === '1') {
      res = Math.max(res, j - i)
      i = j
    }
    j += 1
  }
  return res
}
