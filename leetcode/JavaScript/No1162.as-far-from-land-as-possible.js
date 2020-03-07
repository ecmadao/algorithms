/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an N x N grid containing only values 0 and 1, where 0 represents water and 1 represents land,
 * find a water cell such that its distance to the nearest land cell is maximized and return the distance.
 * The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
 * If no land or water exists in the grid, return -1.
 *
 * Example 1:
 * Input: [[1,0,1],[0,0,0],[1,0,1]]
 * Output: 2
 * Explanation:
 * The cell (1, 1) is as far as possible from all the land with distance 2.
 *
 * Example 2:
 * Input: [[1,0,0],[0,0,0],[0,0,0]]
 * Output: 4
 * Explanation:
 * The cell (2, 2) is as far as possible from all the land with distance 4.
 *
 * Note:
 * 1. 1 <= grid.length == grid[0].length <= 100
 * 2. grid[i][j] is 0 or 1
 *
 * 你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。
 * 其中 0 代表海洋，1 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。
 * 我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。
 * 如果我们的地图上只有陆地或者海洋，请返回 -1
 */


const getRound = (i, j, dis) => {
  const result = []
  for (let col = j - dis; col <= j + dis; col += 1) result.push([i - dis, col], [i + dis, col])
  for (let row = i - dis + 1; row < i + dis; row += 1) result.push([row, j - dis], [row, j + dis])
  return result
}

/**
* @param {number[][]} grid
* @return {number}
*/
var maxDistance = function(grid) {
  const ocean = []
  const N = grid.length

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (grid[i][j] === 0) ocean.push([i, j])
    }
  }

  let maxDis = -Infinity
  while (ocean.length) {
    if (maxDis === N * 2 - 2) break
    const [i, j] = ocean.pop()
    let minDis = Infinity

    for (let dis = 1; dis <= Math.max(j, N - 1 - j, i, N - 1 - i); dis += 1) {
      for (const [row, col] of getRound(i, j, dis)) {
        if (row < 0 || col < 0 || row >= N || col >= N) continue
        if (grid[row][col] === 1) {
          minDis = Math.min(
            minDis,
            Math.abs(row - i) + Math.abs(col - j)
          )
          if (minDis <= dis) break
        }
      }
      // 是否还需检查下一圈：如果下一圈最外层距中心的最短距离，大于当前最短距离，则无需检查
      if (dis + 1 >= minDis) break
    }
    maxDis = Math.max(maxDis, minDis)
  }

  return maxDis === -Infinity || maxDis === Infinity ? -1 : maxDis
}
