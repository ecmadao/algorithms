/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。
 * 池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。
 *
 * 示例：
 * 输入：
 * [
 *   [0,2,1,0],
 *   [0,1,0,1],
 *   [1,1,0,1],
 *   [0,1,0,1]
 * ]
 * 输出： [1,2,4]
 *
 * 提示：
 * 1. 0 < len(land) <= 1000
 * 2. 0 < len(land[i]) <= 1000
 */

/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
  const result = []
  const ROW = land.length
  const COL = land[0].length

  const dfs = (i, j) => {
    land[i][j] = 1
    let count = 1

    for (const [row, col] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1], [i + 1, j + 1], [i + 1, j - 1], [i - 1, j - 1], [i - 1, j + 1]]) {
      if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
      if (land[row][col] !== 0) continue
      count += dfs(row, col)
    }
    return count
  }

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COL; j += 1) {
      if (land[i][j] !== 0) continue
      const area = dfs(i, j)
      result.push(area)
    }
  }
  return result.sort((n1, n2) => n1 - n2)
}
