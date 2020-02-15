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
 *
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare_1 = function(matrix) {
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

/**
 * @param {character[][]} matrix
 * @return {number}
 *
 * 动态规划
 */
var maximalSquare_2 = function(matrix) {
  const dp = []
  let max = 0

  for (let i = 0; i < matrix.length; i += 1) {
    dp[i] = []
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (i === 0 || j === 0 || matrix[i][j] === '0') {
        dp[i][j] = matrix[i][j] === '1' ? 1 : 0
        max = Math.max(max, dp[i][j])
        continue
      }

      const left = dp[i][j - 1]
      const top = dp[i - 1][j]

      if (left === top) {
        dp[i][j] = left + (matrix[i - top][j - left] === '1' ? 1 : 0)
      } else {
        dp[i][j] = Math.min(left, top) + 1
      }
      max = Math.max(max, dp[i][j])
    }
  }

  return max * max
}

// Test case
maximalSquare_2([["1"]]);
maximalSquare_2([["0"]]);
maximalSquare_2([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]);
maximalSquare_2([
  ["1","0","1","0"],
  ["1","0","1","1"],
  ["1","0","1","1"],
  ["1","1","1","1"]
]);


