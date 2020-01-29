/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * A 2d grid map of m rows and n columns is initially filled with water.
 * We may perform an addLand operation which turns the water at position (row, col) into a land.
 * Given a list of positions to operate, count the number of islands after each addLand operation.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example:
 * Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
 * Output: [1,1,2,3]
 *
 * Explanation:
 * Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).
 * 0 0 0
 * 0 0 0
 * 0 0 0
 * Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.
 *
 * 1 0 0
 * 0 0 0   Number of islands = 1
 * 0 0 0
 * Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.
 *
 * 1 1 0
 * 0 0 0   Number of islands = 1
 * 0 0 0
 * Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.
 *
 * 1 1 0
 * 0 0 1   Number of islands = 2
 * 0 0 0
 * Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.
 *
 * 1 1 0
 * 0 0 1   Number of islands = 3
 * 0 1 0
 *
 * Follow up:
 * Can you do it in time complexity O(k log mn), where k is the length of the positions?
 *
 * 注意:
 * 在填充时，存在填充点连接多个已存在岛屿的情况。例如：m = 3, n = 3, positions = [[0,1], [1,2], [0,2], [1,1]]
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  const board = Array.from(
    { length: m },
    (_, i) => Array.from({ length: n }, (v, index) => 0)
  )
  let results = []
  let result = 0

  const check = (i, j, same, target) => {
    if (i < 0 || i >= m) return
    if (j < 0 || j >= n) return

    if (board[i][j] === 0) return
    if (board[i][j] === target) return

    const num = board[i][j]
    if (num !== same) {
      result -= 1
    }
    board[i][j] = target
    check(i, j + 1, num, target)
    check(i, j - 1, num, target)
    check(i - 1, j, num, target)
    check(i + 1, j, num, target)
  }

  for (let index = 0; index < positions.length; index += 1) {
    const [i, j] = positions[index]

    if (board[i][j] === 0) {
      board[i][j] = index + 1
      result += 1

      check(i, j + 1, index + 1, index + 1)
      check(i, j - 1, index + 1, index + 1)
      check(i - 1, j, index + 1, index + 1)
      check(i + 1, j, index + 1, index + 1)
    }
    results.push(result)
  }
  return results
}

console.log(
  numIslands2(3, 3, [[0,1],[1,2],[0,2],[1,1],[2,0]])
)
console.log(
  numIslands2(3, 3, [[0,1],[1,2],[0,2],[1,1],[1,1]])
)
