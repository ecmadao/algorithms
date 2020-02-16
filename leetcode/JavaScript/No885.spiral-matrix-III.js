/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.
 * Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.
 * Now, we walk in a clockwise spiral shape to visit every position in this grid.
 * Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.)
 * Eventually, we reach all R * C spaces of the grid.
 * Return a list of coordinates representing the positions of the grid in the order they were visited.
 *
 * Example 1:
 * Input: R = 1, C = 4, r0 = 0, c0 = 0
 * Output: [[0,0],[0,1],[0,2],[0,3]]
 *
 * Example 2:
 * Input: R = 5, C = 6, r0 = 1, c0 = 4
 * Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
 *
 * Note:
 * 1. 1 <= R <= 100
 * 2. 1 <= C <= 100
 * 3. 0 <= r0 < R
 * 4. 0 <= c0 < C
 *
 * 在 R 行 C 列的矩阵上，我们从 (r0, c0) 面朝东面开始
 * 这里，网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。
 * 现在，我们以顺时针按螺旋状行走，访问此网格中的每个位置。
 * 每当我们移动到网格的边界之外时，我们会继续在网格之外行走（但稍后可能会返回到网格边界）。
 * 最终，我们到过网格的所有 R * C 个空间。
 * 按照访问顺序返回表示网格位置的坐标列表
 */

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  let len = 2
  const result = []

  const validate = (r, c) => r >= 0 && r < R && c >= 0 && c < C
  const getNext = [
    (r, c) => [r, c + 1],
    (r, c) => [r + 1, c],
    (r, c) => [r, c - 1],
    (r, c) => [r - 1, c]
  ]
  const diff = (r1, c1, r2, c2) => Math.abs(r1 - r2) + Math.abs(c1 - c2)

  let r = r0
  let c = c0
  let index = 0

  while (result.length < R * C) {
    for (let i = 0; i < 2; i += 1) {
      let r1 = r
      let c1 = c
      const next = getNext[index % 4]
      while (diff(r1, c1, r, c) <= len - 1) {
        if (diff(r1, c1, r, c) === len - 1) break
        if (validate(r1, c1)) {
          result.push([r1, c1])
          if (result.length === R * C) return result
        }
        const point = next(r1, c1)
        r1 = point[0]
        c1 = point[1]
      }
      index += 1
      r = r1
      c = c1
    }

    len += 1
  }

  return result
}
