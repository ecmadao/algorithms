/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一幅由N × N矩阵表示的图像，其中每个像素的大小为4字节，编写一种方法，将图像旋转90度。
 * 不占用额外内存空间能否做到？
 *
 * 示例 1:
 * 给定 matrix =
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ],
 * 原地旋转输入矩阵，使其变为:
 * [
 *   [7,4,1],
 *   [8,5,2],
 *   [9,6,3]
 * ]
 *
 * 示例 2:
 * 给定 matrix =
 * [
 *   [ 5, 1, 9,11],
 *   [ 2, 4, 8,10],
 *   [13, 3, 6, 7],
 *   [15,14,12,16]
 * ],
 * 原地旋转输入矩阵，使其变为:
 * [
 *   [15,13, 2, 5],
 *   [14, 3, 4, 1],
 *   [12, 6, 8, 9],
 *   [16, 7,10,11]
 * ]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const N = matrix.length
  if (!N) return

  let i = 0
  let j = N - 1
  while (i < j) {
    let index = i
    while (index < j) {
      let count = 0
      let row = i
      let col = index
      let tmp = matrix[row][col]

      while (count < 4) {
        const nextCol = N - 1 - row
        const nextRow = col

        const val = matrix[nextRow][nextCol]
        matrix[nextRow][nextCol] = tmp
        tmp = val
        row = nextRow
        col = nextCol
        count += 1
      }
      index += 1
    }

    i += 1
    j -= 1
  }
}
