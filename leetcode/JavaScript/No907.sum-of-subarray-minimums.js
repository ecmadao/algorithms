/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers A, find the sum of min(B), where B ranges over every (contiguous) subarray of A.
 * Since the answer may be large, return the answer modulo 10^9 + 7.
 *
 * Example 1:
 * Input: [3,1,2,4]
 * Output: 17
 * Explanation:
 * Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
 * Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.
 *
 * Note:
 * 1. 1 <= A.length <= 30000
 * 2. 1 <= A[i] <= 30000
 *
 * 给定一个整数数组 A，找到 min(B) 的总和，其中 B 的范围为 A 的每个（连续）子数组。
 * 由于答案可能很大，因此返回答案模 10^9 + 7
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins_1 = function(A) {
  let result = 0

  for (let i = 0; i < A.length; i += 1) {
    let min = A[i]
    result += min

    let j = i + 1
    while (j < A.length) {
      if (min > A[j]) min = A[j]
      result += min
      j += 1
    }
  }
  return result % (Math.pow(10, 9) + 7)
}

/**
 * @param {number[]} A
 * @return {number}
 * https://leetcode-cn.com/problems/sum-of-subarray-minimums/solution/dan-diao-zhan-python3-by-smoon1989/
 */
var sumSubarrayMins_2 = function(A) {
  let result = 0
  const base = Math.pow(10, 9) + 7

  let stack = []
  const left = []
  const right = []

  for (let i = 0; i < A.length; i += 1) {
    while (stack.length && A[stack[stack.length - 1]] > A[i]) stack.pop()
    if (stack.length) {
      left[i] = stack[stack.length - 1]
    } else {
      left[i] = -1
    }
    stack.push(i)
  }

  stack = []
  for (let i = A.length - 1; i >= 0; i -= 1) {
    while (stack.length && A[stack[stack.length - 1]] >= A[i]) stack.pop()
    if (stack.length) {
      right[i] = stack[stack.length - 1]
    } else {
      right[i] = A.length
    }
    stack.push(i)
  }

  for (let i = 0; i < A.length; i += 1) {
    result += A[i] * ((i - left[i]) * (right[i] - i))
  }
  return result % base
}
