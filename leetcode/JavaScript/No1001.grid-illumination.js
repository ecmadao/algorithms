/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * On a N x N grid of cells, each cell (x, y) with 0 <= x < N and 0 <= y < N has a lamp.
 * Initially, some number of lamps are on.  lamps[i] tells us the location of the i-th lamp that is on.
 * Each lamp that is on illuminates every square on its x-axis, y-axis, and both diagonals (similar to a Queen in chess).
 * For the i-th query queries[i] = (x, y), the answer to the query is 1 if the cell (x, y) is illuminated, else 0.
 * After each query (x, y) [in the order given by queries], we turn off any lamps that are at cell (x, y) or are adjacent 8-directionally (ie., share a corner or edge with cell (x, y).)
 * Return an array of answers.  Each value answer[i] should be equal to the answer of the i-th query queries[i].
 *
 * Example 1:
 * Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
 * Output: [1,0]
 * Explanation:
 * Before performing the first query we have both lamps [0,0] and [4,4] on.
 * The grid representing which cells are lit looks like this, where [0,0] is the top left corner, and [4,4] is the bottom right corner:
 * 1 1 1 1 1
 * 1 1 0 0 1
 * 1 0 1 0 1
 * 1 0 0 1 1
 * 1 1 1 1 1
 * Then the query at [1, 1] returns 1 because the cell is lit.  After this query, the lamp at [0, 0] turns off, and the grid now looks like this:
 * 1 0 0 0 1
 * 0 1 0 0 1
 * 0 0 1 0 1
 * 0 0 0 1 1
 * 1 1 1 1 1
 * Before performing the second query we have only the lamp [4,4] on.  Now the query at [1,0] returns 0, because the cell is no longer lit.
 *
 * Note:
 * 1 <= N <= 10^9
 * 0 <= lamps.length <= 20000
 * 0 <= queries.length <= 20000
 * lamps[i].length == queries[i].length == 2
 *
 * 在 N x N 的网格上，每个单元格 (x, y) 上都有一盏灯，其中 0 <= x < N 且 0 <= y < N 。
 * 最初，一定数量的灯是亮着的。lamps[i] 告诉我们亮着的第 i 盏灯的位置。每盏灯都照亮其所在 x 轴、y 轴和两条对角线上的每个正方形（类似于国际象棋中的皇后）。
 * 对于第 i 次查询 queries[i] = (x, y)，如果单元格 (x, y) 是被照亮的，则查询结果为 1，否则为 0 。
 * 在每个查询 (x, y) 之后 [按照查询的顺序]，我们关闭位于单元格 (x, y) 上或其相邻 8 个方向上（与单元格 (x, y) 共享一个角或边）的任何灯。
 * 返回答案数组 answer。每个值 answer[i] 应等于第 i 次查询 queries[i] 的结果
 */

/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
  const lights = {
    row: {},
    col: {},
    diagonal1: {},
    diagonal2: {}
  }
  const dict = {}

  for (const [i, j] of lamps) {
    dict[`${i}-${j}`] = 1
    lights.row[i] = (lights.row[i] || 0) + 1
    lights.col[j] = (lights.col[j] || 0) + 1
    lights.diagonal1[i - j] = (lights.diagonal1[i - j] || 0) + 1
    lights.diagonal2[i + j] = (lights.diagonal2[i + j] || 0) + 1
  }

  const result = []
  for (const [r, c] of queries) {
    const light = [
      lights.row[r],
      lights.col[c],
      lights.diagonal1[r - c],
      lights.diagonal2[r + c]
    ].some(v => v > 0)
    result.push(light ? 1 : 0)

    if (!light) continue

    for (const [i, j] of [[r, c], [r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1], [r + 1, c + 1], [r + 1, c - 1], [r - 1, c -1], [r - 1, c + 1]]) {
      if (i < 0 || j < 0 || i >= N || j >= N) continue
      if (!dict[`${i}-${j}`]) continue

      dict[`${i}-${j}`] = 0
      lights.row[i] -= 1
      lights.col[j] -= 1
      lights.diagonal1[i - j] -= 1
      lights.diagonal2[i + j] -= 1
    }
  }

  return result
}
