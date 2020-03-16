/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:
 * 1. B.length >= 3
 * 2. There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
 * (Note that B could be any subarray of A, including the entire array A.)
 * Given an array A of integers, return the length of the longest mountain.
 * Return 0 if there is no mountain.
 *
 * Example 1:
 * Input: [2,1,4,7,3,2,5]
 * Output: 5
 * Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
 *
 * Example 2:
 * Input: [2,2,2]
 * Output: 0
 * Explanation: There is no mountain.
 *
 * Note:
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 *
 * Follow up:
 * Can you solve it using only one pass?
 * Can you solve it in O(1) space?
 *
 * 我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：
 * 1. B.length >= 3
 * 2. 存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
 * （注意：B 可以是 A 的任意子数组，包括整个数组 A。）
 * 给出一个整数数组 A，返回最长 “山脉” 的长度。
 * 如果不含有 “山脉” 则返回 0。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  let i = 0
  let j = 0
  let res = 0

  while (j < A.length) {
    while (j + 1 < A.length && A[j + 1] > A[j]) j += 1
    if (j === i) {
      i += 1
      j += 1
      continue
    }
    const peak = j
    while (j + 1 < A.length && A[j + 1] < A[j]) j += 1
    if (peak === j) {
      j += 1
      i = j
      continue
    }
    res = Math.max(res, j - i + 1)

    i = j
  }
  return res
}
