/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * For a non-negative integer X, the array-form of X is an array of its digits in left to right order.
 * For example, if X = 1231, then the array form is [1,2,3,1].
 * Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.
 *
 * Example 1:
 * Input: A = [1,2,0,0], K = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 *
 * Example 2:
 * Input: A = [2,7,4], K = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 *
 * Example 3:
 * Input: A = [2,1,5], K = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 *
 * Example 4:
 * Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * Output: [1,0,0,0,0,0,0,0,0,0,0]
 * Explanation: 9999999999 + 1 = 10000000000
 *
 * Note：
 * 1. 1 <= A.length <= 10000
 * 2. 0 <= A[i] <= 9
 * 3. 0 <= K <= 10000
 * 4. If A.length > 1, then A[0] != 0
 *
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。
 * 例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 */


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1
  let num = 0

  while (i >= 0 || K) {
    const sum = (A[i] || 0) + (K % 10) + num

    num = sum >= 10 ? 1 : 0
    if (i < 0) {
      A.unshift(sum % 10)
    } else {
      A[i] = sum % 10
      i -= 1
    }
    K = Math.floor(K / 10)
  }
  if (num) A.unshift(num)
  return A
}
