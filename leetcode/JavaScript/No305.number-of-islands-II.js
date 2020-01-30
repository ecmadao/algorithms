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
var numIslands2_1 = function(m, n, positions) {
  const board = []
  let results = []
  let result = 0

  const check = (i, j, same, target) => {
    if (i < 0 || i >= m) return
    if (j < 0 || j >= n) return

    if (!board[i] || !board[i][j]) return
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
    const position = positions[index]
    const i = position[0]
    const j = position[1]
    if (!board[i]) board[i] = []

    if (board[i][j]) {
      results.push(result)
      continue
    }

    board[i][j] = '0'
    result += 2
    check(i, j, index + 1, index + 1)
    results.push(result)
  }
  return results
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 * faster
 */
var numIslands2 = function(m, n, positions) {
  const tmp = {}
  let result = 0
  const results = []

  const findF = (i, j) => {
    let key = `${i}-${j}`
    while (tmp[key] !== key) key = tmp[key]
    return tmp[key]
  }

  const uf = (i, j, i1, j1) => {
    if (i < 0 || i >= m) return null
    if (j < 0 || j >= n) return null

    let key = `${i}-${j}`
    if (!tmp[key]) return

    const f1 = findF(i, j)
    const f2 = findF(i1, j1)
    if (f1 !== f2) {
      tmp[f2] = f1
      result -= 1
    }
  }

  for (let index = 0; index < positions.length; index += 1) {
    const [i, j] = positions[index]
    const key = `${i}-${j}`
    if (!tmp[key]) {
      result += 1
      tmp[key] = key
      uf(i - 1, j, i, j)
      uf(i + 1, j, i, j)
      uf(i, j + 1, i, j)
      uf(i, j - 1, i, j)
    }
    results.push(result)
  }
  return results
}

console.log(
  numIslands2(3, 3, [[0,1],[1,2],[0,2],[1,1],[2,0]]) // [1,2,1,1,2]
)
console.log(
  numIslands2(3, 3, [[0,1],[1,2],[0,2],[1,1],[1,1]]) // [1,2,1,1,1]
)
console.log(
  numIslands2(3, 3, [[0,0],[0,1],[1,2],[2,1]]) // [1,1,2,3]
)
