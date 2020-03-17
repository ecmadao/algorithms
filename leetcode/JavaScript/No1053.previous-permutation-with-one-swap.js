/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array A of positive integers (not necessarily distinct), return the lexicographically largest permutation that is smaller than A,
 * that can be made with one swap (A swap exchanges the positions of two numbers A[i] and A[j]).  If it cannot be done, then return the same array.
 *
 * Example 1:
 * Input: [3,2,1]
 * Output: [3,1,2]
 * Explanation: Swapping 2 and 1.
 *
 * Example 2:
 * Input: [1,1,5]
 * Output: [1,1,5]
 * Explanation: This is already the smallest permutation.
 *
 * Example 3:
 * Input: [1,9,4,6,7]
 * Output: [1,7,4,6,9]
 * Explanation: Swapping 9 and 7.
 *
 * Example 4:
 * Input: [3,1,1,3]
 * Output: [1,3,1,3]
 * Explanation: Swapping 1 and 3.
 *
 * Note:
 * 1. 1 <= A.length <= 10000
 * 2. 1 <= A[i] <= 10000
 *
 * 给你一个正整数的数组 A（其中的元素不一定完全不同），请你返回可在 一次交换（交换两数字 A[i] 和 A[j] 的位置）后得到的、按字典序排列小于 A 的最大可能排列。
 * 如果无法这么操作，就请返回原数组
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var prevPermOpt1 = function(A) {
  if (A.length <= 1) return A

  let i = A.length - 1
  while (i > 0 && A[i - 1] <= A[i]) i -= 1
  if (i === 0 && A[0] <= A[1]) return A

  const index = i === 0 ? i : i - 1
  let j = index + 1
  let max = j
  while (j < A.length) {
    if (A[max] < A[j] && A[j] < A[index]) max = j
    j += 1
  }

  const num = A[index]
  A[index] = A[max]
  A[max] = num
  return A
}
