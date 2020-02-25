/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a given grid, each cell can have one of three values:
 * 1. the value 0 representing an empty cell;
 * 2. the value 1 representing a fresh orange;
 * 3. the value 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1 instead.
 *
 * Example 1:
 * Input: [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 *
 * Example 2:
 * Input: [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation:
 * The orange in the bottom left corner (row 2, column 0) is never rotten,
 * because rotting only happens 4-directionally.
 *
 * Example 3:
 * Input: [[0,2]]
 * Output: 0
 * Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 *
 * Note:
 * 1. 1 <= grid.length <= 10
 * 2. 1 <= grid[0].length <= 10
 * 3. grid[i][j] is only 0, 1, or 2
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting_1 = function(grid) {
  let time = 0
  let totalRotting = 0
  let freshOrange = 0

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 1) freshOrange += 1
    }
  }

  while (true) {
    const cache = new Set()
    let newRotting = 0

    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] !== 2) continue
        if (cache.has(`${i}-${j}`)) continue

        for (const [row, col] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) {
          if (row < 0 || col < 0 || row >= grid.length || col >= grid[i].length) continue
          if (grid[row][col] === 1) {
            grid[row][col] = 2
            cache.add(`${row}-${col}`)
            newRotting += 1
          }
        }
      }
    }
    if (!newRotting) break

    totalRotting += newRotting
    time += 1
  }
  return freshOrange === totalRotting ? time : -1
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting_2 = function(grid) {
  const queue = []
  let time = 0
  let freshOrange = 0
  let totalRotting = 0

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 2) queue.push([i, j])
      if (grid[i][j] === 1) freshOrange += 1
    }
  }

  while (queue.length) {
    let len = queue.length

    while (len) {
      const [i, j] = queue.shift()

      for (const [row, col] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[i].length) continue
        if (grid[row][col] === 1) {
          grid[row][col] = 2
          queue.push([row, col])
        }
      }
      len -= 1
    }
    if (queue.length) time += 1
    totalRotting += queue.length
  }

  return freshOrange === totalRotting ? time : -1
}
