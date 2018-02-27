/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a non-empty 2D matrix matrix and an integer k,
 * find the max sum of a rectangle in the matrix such that its sum is no larger than k.
 *
 * Example:
 * Given matrix = [
 *  [1,  0, 1],
 *  [0, -2, 3]
 * ]
 * k = 2
 * The answer is 2.
 * Because the sum of rectangle [[0, 1], [-2, 3]] is 2 and 2 is the max number no larger than k (k = 2).
 *
 * Note:
 * 1. The rectangle inside the matrix must have an area > 0.
 * 2. What if the number of rows is much larger than the number of columns?
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  let maxNum = -Infinity;
  const sum = [];

  for (let i = 0; i < matrix.length; i += 1) {
    sum[i] = [];
    const row = matrix[i];
    for (let j = 0; j < row.length; j += 1) {
      let num = matrix[i][j];
      if (i > 0) num += sum[i - 1][j];
      if (j > 0) num += sum[i][j - 1];
      if (i > 0 && j > 0) num -= sum[i - 1][j - 1];
      sum[i][j] = num;
      if (num === k) return k;

      for (let iTmp = 0; iTmp <= i; iTmp += 1) {
        for (let jTmp = 0; jTmp <= j; jTmp += 1) {
          num = sum[i][j];
          if (iTmp > 0) num -= sum[iTmp - 1][j];
          if (jTmp > 0) num -= sum[i][jTmp - 1];
          if (iTmp > 0 && jTmp > 0) num += sum[iTmp - 1][jTmp - 1];
          if (num === k) return k;
          if (num < k) maxNum = Math.max(num, maxNum);
        }
      }
    }
  }
  return maxNum;
};
