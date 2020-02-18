/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 *
 * Example 1:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 *
 * Note:
 * 1. 1 <= A.length <= 5000
 * 2. 0 <= A[i] <= 5000
 *
 * 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 * 你可以返回满足此条件的任何数组作为答案
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  if (A.length <= 1) return A

  let i = 0
  let j = 0

  while (true) {
    while (i < A.length && A[i] % 2 !== 0) i += 1
    while (j < i && A[j] % 2 === 0) j += 1

    if (i >= A.length) break
    if (j >= i) {
      i += 1
      continue
    }

    const tmp = A[i]
    A[i] = A[j]
    A[j] = tmp

    i += 1
    j += 1
  }

  return A
}
