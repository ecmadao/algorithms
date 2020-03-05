/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a 2D grid of 0s and 1s, we change at most one 0 to a 1.
 * After, what is the size of the largest island? (An island is a 4-directionally connected group of 1s).
 *
 * Example 1:
 * Input: [[1, 0], [0, 1]]
 * Output: 3
 * Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
 *
 * Example 2:
 * Input: [[1, 1], [1, 0]]
 * Output: 4
 * Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
 *
 * Example 3:
 * Input: [[1, 1], [1, 1]]
 * Output: 4
 * Explanation: Can't change any 0 to 1, only one island with area = 4.
 *
 * Notes:
 * 1. 1 <= grid.length = grid[0].length <= 50.
 * 2. 0 <= grid[i][j] <= 1.
 *
 * 在二维地图上， 0代表海洋， 1代表陆地，我们最多只能将一格 0 海洋变成 1变成陆地。
 * 进行填海之后，地图上最大的岛屿面积是多少？（上、下、左、右四个方向相连的 1 可形成岛屿）
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const ROW = grid.length
  if (!ROW) return 0
  const COL = grid[0].length
  if (!COL) return 0

  const dfs = (i, j, mark) => {
    grid[i][j] = mark
    let count = 1

    for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
      if (grid[row][col] !== 1) continue
      count += dfs(row, col, mark)
    }

    return count
  }

  let area = 0
  let mark = 2
  const map = {}
  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      if (grid[i][j] === 1) {
        const count = dfs(i, j, mark)
        map[mark] = count
        area = Math.max(area, count)
        mark += 1
      }
    }
  }

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      if (grid[i][j] !== 0) continue

      let num = 1
      let used = new Set()
      for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
        if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
        const mark = grid[row][col]
        if (used.has(mark)) continue
        used.add(mark)
        num += (map[mark] || 0)
      }
      area = Math.max(area, num)
    }
  }

  return area
}
