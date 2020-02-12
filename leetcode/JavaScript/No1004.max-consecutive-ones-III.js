/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array A of 0s and 1s, we may change up to K values from 0 to 1.
 * Return the length of the longest (contiguous) subarray that contains only 1s.
 *
 * Example 1:
 * Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * Output: 6
 * Explanation:
 * [1,1,1,0,0,1,1,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
 *
 * Example 2:
 * Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * Output: 10
 * Explanation:
 * [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
 *
 * Note:
 * 1. 1 <= A.length <= 20000
 * 2. 0 <= K <= A.length
 * 3. A[i] is 0 or 1
 *
 * 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
 * 返回仅包含 1 的最长（连续）子数组的长度
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 *
 * 滑动窗口
 */
var longestOnes = function(A, K) {
  let i = 0
  let j = 0
  const indexes = []
  let result = 0

  while (j < A.length) {
    if (A[j] === 0) {
      indexes.push(j)
    }

    if (indexes.length > K) {
      result = Math.max(result, j - i)
      i = indexes.shift() + 1
    }

    j += 1
  }

  return Math.max(result, j - i)
}
