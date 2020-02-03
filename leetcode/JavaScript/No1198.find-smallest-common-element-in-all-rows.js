/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix mat where every row is sorted in increasing order, return the smallest common element in all rows.
 * If there is no common element, return -1.
 * 
 * Example 1:
 * Input: mat = [
 *  [1,2,3,4,5],
 *  [2,4,5,8,10],
 *  [3,5,7,9,11],
 *  [1,3,5,7,9]
 * ]
 * Output: 5
 * 
 * Constraints:
 * 1. 1 <= mat.length, mat[i].length <= 500
 * 2. 1 <= mat[i][j] <= 10^4
 * 3. mat[i] is sorted in increasing order.
 * 
 * 给一个矩阵 mat，其中每一行的元素都已经按 递增 顺序排好了，找出在所有这些行中最小的公共元素。
 * 如果矩阵中没有这样的公共元素，就返回 -1
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
  if (!mat.length || !mat[0].length) return -1
  const indexes = Array.from({ length: mat.length }, (_, i) => 0)

  let i = 0
  while (i < mat[0].length) {
    const num = mat[0][i]
    let same = true

    for (let i = 1; i < mat.length; i += 1) {
      const row = mat[i]
      let index = indexes[i]
      while (row[index] < num) index += 1
      if (index >= row.length) return -1

      if (num !== row[index]) same = false
      indexes[i] = index
    }
    if (same) return num

    i += 1
  }
  return -1
}
