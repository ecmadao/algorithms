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
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
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

// Test case
numberOfArithmeticSlices([1, 2, 3, 4]); // 3
numberOfArithmeticSlices([1, 3, 5, 7, 9]); // 6
numberOfArithmeticSlices([1, 3, 5, 7, 9, 10, 11, 12]); // 9
