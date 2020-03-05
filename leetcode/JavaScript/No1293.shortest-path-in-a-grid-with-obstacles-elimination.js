/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a m * n grid, where each cell is either 0 (empty) or 1 (obstacle). In one step, you can move up, down, left or right from and to an empty cell.
 * Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m-1, n-1) given that you can eliminate at most k obstacles.
 * If it is not possible to find such walk return -1.
 *
 * Example 1:
 * Input:
 * grid =
 * [[0,0,0],
 *  [1,1,0],
 *  [0,0,0],
 *  [0,1,1],
 *  [0,0,0]],
 * k = 1
 * Output: 6
 * Explanation:
 * The shortest path without eliminating any obstacle is 10.
 * The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
 *
 * Example 2:
 * Input:
 * grid =
 * [[0,1,1],
 *  [1,1,1],
 *  [1,0,0]],
 * k = 1
 * Output: -1
 * Explanation:
 * We need to eliminate at least two obstacles to find such a walk.
 *
 * Constraints:
 * 1. grid.length == m
 * 2. grid[0].length == n
 * 3. 1 <= m, n <= 40
 * 4. 1 <= k <= m*n
 * 5. grid[i][j] == 0 or 1
 * 6. grid[0][0] == grid[m-1][n-1] == 0
 *
 * 给你一个 m * n 的网格，其中每个单元格不是 0（空）就是 1（障碍物）。每一步，您都可以在空白单元格中上、下、左、右移动。
 * 如果最多可以消除 k 个障碍物，请找出从左上角 (0, 0) 到右下角 (m-1, n-1) 的最短路径，并返回通过该路径所需的步数。如果找不到这样的路径，则返回 -1
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 *
 * BFS
 */
var shortestPath_1 = function(grid, k) {
  const ROW = grid.length
  if (!ROW) return 0
  const COL = grid[0].length
  if (!COL) return 0

  let minStep = 0
  const cache = {}

  const queue = [[0,0,0]]
  while (queue.length) {
    let len = queue.length
    while (len) {
      let [i, j, count] = queue.shift()
      if (i === ROW - 1 && j === COL - 1) return minStep

      for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
        if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
        const c = count + grid[row][col]
        if (c > k) continue
        if (cache[`${row}-${col}`] === undefined || cache[`${row}-${col}`] > c) {
          cache[`${row}-${col}`] = c
          queue.push([row, col, c])
        }
      }
      len -= 1
    }
    minStep += 1
  }
  return -1
}

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 *
 * DFS timeout
 */
var shortestPath_2 = function(grid, k) {
  const ROW = grid.length
  if (!ROW) return 0
  const COL = grid[0].length
  if (!COL) return 0

  let minStep = Infinity
  const cache = {}
  const dfs = (i, j, count, step) => {
    if (step >= minStep || minStep === ROW + COL - 2 || count < 0) return

    if (cache[`${i}-${j}`]) {
      if (cache[`${i}-${j}`].step <= step && cache[`${i}-${j}`].count >= count) return
    }
    cache[`${i}-${j}`] = { step, count }

    const raw = grid[i][j]
    if (raw === 1) count -= 1
    if (i === ROW - 1 && j === COL - 1) {
      minStep = Math.min(minStep, step)
      return
    }

    grid[i][j] = 2
    for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
      if (grid[row][col] === 2) continue
      if (grid[row][col] === 1 && !count) continue
      dfs(row, col, count, step + 1)
    }

    grid[i][j] = raw
  }

  dfs(0, 0, k, 0)
  return minStep === Infinity ? -1 : minStep
}
