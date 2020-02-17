/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * On a 2-dimensional grid, there are 4 types of squares:
 * 1. 1 represents the starting square.  There is exactly one starting square.
 * 2. 2 represents the ending square.  There is exactly one ending square.
 * 3. 0 represents empty squares we can walk over.
 * 4. -1 represents obstacles that we cannot walk over.
 * Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
 *
 * Example 1:
 * Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 * Output: 2
 * Explanation: We have the following two paths:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 *
 * Example 2:
 * Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 * Output: 4
 * Explanation: We have the following four paths:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
 *
 * Example 3:
 * Input: [[0,1],[2,0]]
 * Output: 0
 * Explanation:
 * There is no path that walks over every empty square exactly once.
 * Note that the starting and ending square can be anywhere in the grid.
 *
 * Note:
 * 1 <= grid.length * grid[0].length <= 20
 *
 * 在二维网格 grid 上，有 4 种类型的方格：
 * 1. 1 表示起始方格。且只有一个起始方格。
 * 2. 2 表示结束方格，且只有一个结束方格。
 * 3. 0 表示我们可以走过的空方格。
 * 4. -1 表示我们无法跨越的障碍。
 * 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目，每一个无障碍方格都要通过一次
 *
 * 请注意，起始和结束方格可以位于网格中的任意位置
 */

/**
 * @param {number[][]} grid
 * @return {number}
 *
 * DFS
 */
var uniquePathsIII = function(grid) {
  if (!grid.length) return 0

  let start = null
  let count = 0
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 1) {
        start = [i, j]
      } else if (grid[i][j] === 0) {
        count += 1
      }
    }
  }

  let result = 0
  const walk = (i, j, step) => {
    const num = grid[i][j]
    grid[i][j] = -1

    for (const [r, c] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) {
      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) continue
      switch (grid[r][c]) {
        case -1:
        case 1:
            break
        case 2:
          if (step === count) result += 1
          break
        case 0:
          walk(r, c, step + 1)
          break
      }
    }
    grid[i][j] = num
    return
  }

  walk(start[0], start[1], 0)
  return result
}
