/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
 *
 * Example:
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * Output:  [1,2,4,7,5,3,6,8,9]
 *
 * Note:
 * The total number of elements of the given matrix will not exceed 10,000
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * 先从第一行第一位开始向右遍历，每次都再往对角线遍历
 * 到第一行最后一位元素截止，再垂直向下遍历，每次都再往对角线遍历
 */
var findDiagonalOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) return []

  const data = []
  let flag = -1
  for (let index = 0; index < matrix[0].length; index += 1) {
    let i = 0
    let j = index
    const nums = []

    while (i < matrix.length && j >= 0) {
      nums.push(matrix[i][j])
      i += 1
      j -= 1
    }

    if (flag < 0) nums.reverse()
    data.push(...nums)
    flag *= -1
  }

  for (let index = 1; index < matrix.length; index += 1) {
    let i = index
    let j = matrix[index].length - 1
    const nums = []

    while (i < matrix.length && j >= 0) {
      nums.push(matrix[i][j])
      i += 1
      j -= 1
    }
    if (flag < 0) nums.reverse()
    data.push(...nums)
    flag *= -1
  }

  return data
}
