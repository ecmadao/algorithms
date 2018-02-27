/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integer arrays A and B,
 * return the maximum length of an subarray that appears in both arrays.
 *
 * Example:
 * Input:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * Output: 3
 * Explanation:
 * The repeated subarray with maximum length is [3, 2, 1].
 *
 * Note:
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 *
 * 求两个数组中最长重叠子数组的长度
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  const matrix = [];
  let length = 0;
  for (let a = 0; a < A.length; a += 1) {
    matrix[a] = [];
    for (let b = 0; b < B.length; b += 1) {
      if (A[a] === B[b]) {
        matrix[a][b] = matrix[a - 1] && matrix[a - 1][b - 1]
          ? matrix[a - 1][b - 1] + 1
          : 1;
        length = Math.max(length, matrix[a][b]);
      }
    }
  }
  return length;
};
