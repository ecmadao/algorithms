/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
 * For example, these are arithmetic sequences:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 * The following sequence is not arithmetic.
 * 1, 1, 2, 5, 7
 *
 * A zero-indexed array A consisting of N numbers is given. A subsequence slice of that array is any sequence of integers (P0, P1, ..., Pk) such that 0 ≤ P0 < P1 < ... < Pk < N.
 * A subsequence slice (P0, P1, ..., Pk) of array A is called arithmetic if the sequence A[P0], A[P1], ..., A[Pk-1], A[Pk] is arithmetic. In particular, this means that k ≥ 2.
 * The function should return the number of arithmetic subsequence slices in the array A.
 * The input contains N integers. Every integer is in the range of -231 and 231-1 and 0 ≤ N ≤ 1000. The output is guaranteed to be less than 231-1.
 *
 * Example:
 * Input: [2, 4, 6, 8, 10]
 * Output: 7
 * Explanation:
 * All arithmetic subsequence slices are:
 * [2,4,6]
 * [4,6,8]
 * [6,8,10]
 * [2,4,6,8]
 * [4,6,8,10]
 * [2,4,6,8,10]
 * [2,6,10]
 */

/**
 * @param {number[]} A
 * @return {number}
 * Memory Limit Exceeded
 */
var numberOfArithmeticSlices_MLE = function(A) {
  let count = 0;
  let i = A.length - 1;
  const tmp = [];

  while (i >= 0) {
    tmp[i] = {};
    let j = i + 1;
    while (j <= A.length - 1) {
      const interval = A[j] - A[i];
      const J = tmp[j][interval] || 0;
      const I = tmp[i][interval] || 0;
      tmp[i][interval] = I + J + 1;
      count += J;
      j += 1;
    }
    i -= 1;
  }

  return count;
};

/**
 * @param {number[]} A
 * @return {number}
 * Passed
 */
var numberOfArithmeticSlices = function(A) {
  let count = 0;
  const tmp = [];
  const set = new Set(A);

  for (let i = 0; i < A.length; i += 1) {
    tmp[i] = {};

    for (let j = 0; j < i; j += 1) {
      const interval = A[i] - A[j];
      if (set.has(A[i] + interval)) {
        tmp[i][interval] = tmp[i][interval] || 0;
        tmp[i][interval] += 1;
      }
      if (tmp[j][interval]) {
        tmp[i][interval] += tmp[j][interval];
        count += tmp[j][interval];
      }
    }
  }

  return count;
};

// Test case
console.log(numberOfArithmeticSlices([1, 1, 2, 5, 7])); // 0
console.log(numberOfArithmeticSlices([2, 4, 6])); // 1
console.log(numberOfArithmeticSlices([0, 1, 2, 2, 2])); // 4
console.log(numberOfArithmeticSlices([2, 2, 2, 1, 0])); // 4
console.log(numberOfArithmeticSlices([2, 2, 3, 4])); // 2
console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10])); // 7
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6])); // 12
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8])); // 29
