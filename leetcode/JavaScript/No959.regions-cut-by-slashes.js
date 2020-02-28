/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  These characters divide the square into contiguous regions.
 * (Note that backslash characters are escaped, so a \ is represented as "\\".)
 * Return the number of regions.
 *
 * Example 1:
 * Input:
 * [
 *   " /",
 *   "/ "
 * ]
 * Output: 2
 *
 * Example 2:
 * Input:
 * [
 *   " /",
 *   "  "
 * ]
 * Output: 1
 *
 * Example 3:
 * Input:
 * [
 *   "\\/",
 *   "/\\"
 * ]
 * Output: 4
 * Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
 *
 * Example 4:
 * Input:
 * [
 *   "/\\",
 *   "\\/"
 * ]
 * Output: 5
 * Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
 *
 * Input:
 * [
 *   "//",
 *   "/ "
 * ]
 * Output: 3
 *
 * Note:
 * 1. 1 <= grid.length == grid[0].length <= 30
 * 2. grid[i][j] is either '/', '\', or ' '.
 *
 * 在由 1 x 1 方格组成的 N x N 网格 grid 中，每个 1 x 1 方块由 /、\ 或空格构成。这些字符会将方块划分为一些共边的区域。
 * （请注意，反斜杠字符是转义的，因此 \ 用 "\\" 表示。）。
 * 返回区域的数目
 */

class Graph {
  constructor() {
      this.adj = {}
  }

  link(point1, point2) {
      const key1 = point1.join('-')
      const key2 = point2.join('-')
      if (!this.adj[key1]) this.adj[key1] = []
      if (!this.adj[key2]) this.adj[key2] = []

      this.adj[key1].push(key2)
      this.adj[key2].unshift(key1)
  }
}

class DFS {
  constructor(graph) {
      this.circleCount = 0
      this.graph = graph
      this.marked = {}
      this.stack = {}
  }

  search(key, skip) {
      if (this.marked[key]) return

      console.log(`key: ${key}, from: ${skip}, this.graph.adj[key]: [${this.graph.adj[key]}]`)
      this.marked[key] = true
      this.stack[key] = true

      for (const point of this.graph.adj[key]) {
          if (point === skip) continue
          if (!this.marked[point]) {
              this.search(point, key)
          } else if (this.stack[point]) {
              console.log(`stack point: ${point}, from key: ${key}`)
              this.circleCount += 1
          }
      }
      this.stack[key] = false
  }
}

/**
* @param {string[]} grid
* @return {number}
*/
var regionsBySlashes_failed = function(grid) {
  const graph = new Graph()
  const N = grid.length + 1
  const keys = new Set()

  for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < N; j += 1) {
          if (
              (i === 0 || i === N - 1) && j + 1 < N
          ) {
              keys.add(`${i}-${j}`)
              graph.link([i, j], [i, j + 1])
          }
          if (
              (j === 0 || j === N - 1) && i + 1 < N
          ) {
              keys.add(`${i}-${j}`)
              graph.link([i, j], [i + 1, j])
          }
      }
  }

  // console.log(' ========================= ')
  for (let i = 0; i < grid.length; i += 1) {
      let row = grid[i]
      let j = 0
      let square = 0
      while (j < row.length) {
          const s = row[j]
          switch (s) {
              case '/':
                  keys.add(`${i}-${square + 1}`)
                  graph.link([i, square + 1], [i + 1, square])
                  break
              case '\\':
                  keys.add(`${i}-${square}`)
                  graph.link([i, square], [i + 1, square + 1])
                  break
          }
          square += 1
          j += 1
      }
  }

  const dfs = new DFS(graph)
  dfs.search('0-0')

  // for (const key of keys.values()) dfs.search(key)

  // for (const key of Object.keys(graph.adj)) {
  //     dfs.search(key)
  // }

  return dfs.circleCount
}



/**
 * @param {string[]} grid
 * @return {number}
 * https://leetcode.com/problems/regions-cut-by-slashes/discuss/205674/C%2B%2B-with-picture-DFS-on-upscaled-grid
 */
var regionsBySlashes = function(grid) {
  const N = grid.length * 3
  const map = Array.from({ length: N }, (_, i) => {
    return Array.from({ length: N }, (_, j) => 0)
  })

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid.length; j += 1) {
      const center = [i * 3 + 1, j * 3 + 1]
      map[center[0]][center[1]] = 1
      switch (grid[i][j]) {
        case '/':
          map[center[0] - 1][center[1] + 1] = 1
          map[center[0] + 1][center[1] - 1] = 1
          break
        case '\\':
          map[center[0] - 1][center[1] - 1] = 1
          map[center[0] + 1][center[1] + 1] = 1
          break
      }
    }
  }

  const dfs = (i, j) => {
    map[i][j] = 1
    for (const [row, col] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
      if (row < 0 || col < 0 || row >= N || col >= N) continue
      if (map[row][col] !== 0) continue
      dfs(row, col)
    }
  }

  let result = 0
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (map[i][j] === 0) {
        result += 1
        dfs(i, j)
      }
    }
  }

  return result
}

// Test case
// [" /","/ "]
// ["\\/\\ "," /\\/"," \\/ ","/ / "]
// ["\\//\\/\\//\\","\\  /\\/ //","//\\/ /\\\\ ","\\\\\\//\\///","\\//// ///","\\   / \\\\\\","\\ /\\ /\\/\\","/\\\\//  \\/"," ///\\/\\\\/"]