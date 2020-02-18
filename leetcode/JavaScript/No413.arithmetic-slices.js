/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
 *
 * for example, these are arithmetic sequence:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 *
 * The following sequence is not arithmetic.
 * 1, 1, 2, 5, 7
 *
 * A zero-indexed array A consisting of N numbers is given.
 * A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.
 * A slice (P, Q) of array A is called arithmetic if the sequence:
 * A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.
 * The function should return the number of arithmetic slices in the array A.
 *
 * Example:
 * A = [1, 2, 3, 4]
 * return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 *
 * 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。
 * 例如，以下数列为等差数列:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 * 以下数列不是等差数列。
 * 1, 1, 2, 5, 7
 *
 * 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。
 * 如果满足以下条件，则称子数组(P, Q)为等差数组：
 * 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。
 * 函数要返回数组 A 中所有为等差数组的子数组个数。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices_1 = function(A) {
  let count = 0;
  let i = 0;
  let next = 0;

  // [1,2,3] -> 1
  // [1,2,3,4] -> 3
  // [1,2,3,4,5] -> 6
  // (5 - 2) + (5 - 3) + (5 - 4)
  // [1,2,3,4,5,6] -> 10
  // (6 - 2) + (6 - 3) + (6 - 4) + (6 - 5)
  // ->
  // (n - 2) + ... + 1
  // (n - 1) * (n - 2) / 2

  while (i <= A.length - 3) {
    if (A[i] - A[i + 1] === A[i + 1] - A[i + 2]) {
      const interval = A[i + 1] - A[i];
      next = i + 3;
      while (next < A.length && A[next] - A[next - 1] === interval) {
        next += 1;
      }
      const len = next - i;
      count += (len - 2) * (len - 1) / 2;
      i = next - 1;
    } else {
      i += 1;
    }
  }

  return count;
};

/**
 * @param {number[]} A
 * @return {number}
 *
 * 动态规划
 */
var numberOfArithmeticSlices_2 = function(A) {
  if (A.length < 3) return 0

  const dp = {}
  let result = 0

  for (let i = 2; i < A.length; i += 1) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      let newCount = 0
      let len = 0
      if (!dp[i - 1]) {
        len = 3
        newCount = 1
      } else {
        len = dp[i - 1] + 1
        newCount = dp[i - 1] - 1
      }

      result += newCount
      dp[i] = len
    }
  }
  return result
}

// Test case
numberOfArithmeticSlices_2([1, 2, 3, 4]); // 3
numberOfArithmeticSlices_2([1, 3, 5, 7, 9]); // 6
numberOfArithmeticSlices_2([1, 3, 5, 7, 9, 10, 11, 12]); // 9
