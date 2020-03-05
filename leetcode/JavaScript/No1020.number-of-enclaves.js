/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)
 * A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.
 * Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.
 *
 * Example 1:
 * Input: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
 * Output: 3
 * Explanation:
 * There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.
 *
 * Example 2:
 * Input: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
 * Output: 0
 * Explanation:
 * All 1s are either on the boundary or can reach the boundary.
 *
 * Note:
 * 1. 1 <= A.length <= 500
 * 2. 1 <= A[i].length <= 500
 * 3. 0 <= A[i][j] <= 1
 * 4. All rows have the same size.
 *
 * 给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。
 * 移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。
 * 返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
  const ROW = A.length
  const COL = A[0].length

  const dfs = (i, j) => {
    A[i][j] = 0

    let result = 1
    if (i === 0 || i === ROW - 1 || j === 0 || j === COL - 1) result = 0

    for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
      if (A[row][col] !== 1) continue
      const res = dfs(row, col)
      if (!result || !res) {
        result = 0
      } else {
        result += res
      }
    }
    return result
  }

  let count = 0
  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      if (A[i][j] === 1) {
        count += dfs(i, j)
      }
    }
  }
  return count
}
