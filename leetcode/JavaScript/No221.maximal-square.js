/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D binary matrix filled with 0's and 1's,
 * find the largest square containing only 1's and return its area.
 *
 * Example:
 * Input:
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * Output: 4
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const rowMax = matrix.length;
  if (!rowMax) return 0;

  const columnMax = matrix[0].length;
  const nums = matrix[0].map(n => Number(n));
  const dp = [
    nums
  ];

  let result = Math.max(...nums);

  for (let r = 1; r < rowMax; r += 1) {
    const init = Number(matrix[r][0]);
    if (init > result) result = init;
    if (!dp[r]) dp[r] = [init];

    for (let c = 1; c < columnMax; c += 1) {
      if (matrix[r][c] === '0') {
        dp[r][c] = 0;
        continue;
      }
      if (dp[r - 1][c - 1] === 0) {
        dp[r][c] = 1;
        continue;
      }

      let length = 1;
      while (
        c - length >= 0
        && r - length >= 0
        && matrix[r][c - length] === '1'
        && matrix[r - length][c] === '1'
        && dp[r - 1][c - 1] >= length * length
      ) {
        length += 1;
      }
      const area = length * length;
      if (area > result) result = area;
      dp[r][c] = area;
    }
  }

  return result;
};

// Test case
maximalSquare([["1"]]);
maximalSquare([["0"]]);
maximalSquare([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]);
maximalSquare([
  ["1","0","1","0"],
  ["1","0","1","1"],
  ["1","0","1","1"],
  ["1","1","1","1"]
]);


