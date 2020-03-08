/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a 2D integer matrix M representing the gray scale of an image,
 * you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.
 *
 * Example 1:
 * Input:
 * [[1,1,1],
 *  [1,0,1],
 *  [1,1,1]]
 * Output:
 * [[0, 0, 0],
 *  [0, 0, 0],
 *  [0, 0, 0]]
 * Explanation:
 * For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 * For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 * For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 *
 * Note:
 * 1. The value in the given matrix is in the range of [0, 255].
 * 2. The length and width of the given matrix are in the range of [1, 150].
 *
 * 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们
 */

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const ROW = M.length
  const COL = M[0].length

  const result = []
  for (let i = 0; i < ROW; i += 1) {
    result[i] = []
    for (let j = 0; j < COL; j += 1) {
      let count = 1
      const sum = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1], [i + 1, j + 1], [i + 1, j - 1], [i - 1, j - 1], [i - 1, j + 1]].reduce((n, [row, col]) => {
        if (row < 0 || col < 0 || row >= ROW || col >= COL) return n
        count += 1
        return n + M[row][col]
      }, M[i][j])

      result[i][j] = Math.floor(sum / count)
    }
  }

  return result
}
