/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
 * Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: N = 3, K = 7
 * Output: [181,292,707,818,929]
 * Explanation: Note that 070 is not a valid number, because it has leading zeroes.
 *
 * Example 2:
 * Input: N = 2, K = 1
 * Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 *
 * Note:
 * 1. 1 <= N <= 9
 * 2. 0 <= K <= 9
 *
 * 返回所有长度为 N 且满足其每两个连续位上的数字之间的差的绝对值为 K 的非负整数。
 * 请注意，除了数字 0 本身之外，答案中的每个数字都不能有前导零。例如，01 因为有一个前导零，所以是无效的；但 0 是有效的
 */

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  let n = 1
  let dp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  while (n < N) {
    const tmp = dp
      .filter(s => Number(s[0]) + K <= 9 || Number(s[0]) - K >= 0)
      .reduce((arr, s) => {
        if (K === 0) {
          if (Number(s[0]) > 0) arr.push(`${Number(s[0])}${s}`)
        } else {
          if (Number(s[0]) + K <= 9) arr.push(`${Number(s[0]) + K}${s}`)
          if (Number(s[0]) - K > 0 || (Number(s[0]) - K === 0 && n < N - 1)) arr.push(`${Number(s[0]) - K}${s}`)
        }
        return arr
      }, [])
    dp = tmp
    n += 1
  }

  return dp
}
