/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a square array of integers A, we want the minimum sum of a falling path through A.
 * A falling path starts at any element in the first row, and chooses one element from each row.
 * The next row's choice must be in a column that is different from the previous row's column by at most one.
 *
 * Example 1:
 * Input: [[1,2,3],[4,5,6],[7,8,9]]
 * Output: 12
 * Explanation:
 * The possible falling paths are:
 * [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
 * [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
 * [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
 * The falling path with the smallest sum is [1,4,7], so the answer is 12.
 *
 * Note:
 * 1. 1 <= A.length == A[0].length <= 100
 * 2. -100 <= A[i][j] <= 100
 *
 * 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
 * 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  let min = Infinity
  const ROW = A.length
  const COL = A[0].length
  const dp = [Array.from({ length: COL }, (_, j) => 0)]

  for (let i = 0; i < ROW; i += 1) {
    dp[i + 1] = []
    for (let j = 0; j < COL; j += 1) {
      dp[i + 1][j] = A[i][j] + Math.min(
        dp[i][j],
        j - 1 >= 0 ? dp[i][j - 1] : Infinity,
        j + 1 < COL ? dp[i][j + 1] : Infinity
      )

      if (i === ROW - 1) min = Math.min(min, dp[i + 1][j])
    }
  }
  return min
}

// [
//    [1,2,3],
//    [4,5,6],
//    [7,8,9]
// ]