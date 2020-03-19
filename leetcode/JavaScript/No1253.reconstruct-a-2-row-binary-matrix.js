/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the following details of a matrix with n columns and 2 rows :
 * 1. The matrix is a binary matrix, which means each element in the matrix can be 0 or 1.
 * 2. The sum of elements of the 0-th(upper) row is given as upper.
 * 3. The sum of elements of the 1-st(lower) row is given as lower.
 * 4. The sum of elements in the i-th column(0-indexed) is colsum[i], where colsum is given as an integer array with length n.
 *
 * Your task is to reconstruct the matrix with upper, lower and colsum.
 * Return it as a 2-D integer array.
 * If there are more than one valid solution, any of them will be accepted.
 * If no valid solution exists, return an empty 2-D array.
 *
 * Example 1:
 * Input: upper = 2, lower = 1, colsum = [1,1,1]
 * Output: [[1,1,0],[0,0,1]]
 * Explanation: [[1,0,1],[0,1,0]], and [[0,1,1],[1,0,0]] are also correct answers.
 *
 * Example 2:
 * Input: upper = 2, lower = 3, colsum = [2,2,1,1]
 * Output: []
 *
 * Example 3:
 * Input: upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1]
 * Output: [[1,1,1,0,1,0,0,1,0,0],[1,0,1,0,0,0,1,1,0,1]]
 *
 * Constraints:
 * 1. 1 <= colsum.length <= 10^5
 * 2. 0 <= upper, lower <= colsum.length
 * 3. 0 <= colsum[i] <= 2
 *
 * 给你一个 2 行 n 列的二进制数组：
 * 1. 矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 0 就是 1。
 * 2. 第 0 行的元素之和为 upper。
 * 3. 第 1 行的元素之和为 lower。
 * 4. 第 i 列（从 0 开始编号）的元素之和为 colsum[i]，colsum 是一个长度为 n 的整数数组。
 *
 * 你需要利用 upper，lower 和 colsum 来重构这个矩阵，并以二维整数数组的形式返回它。
 * 如果有多个不同的答案，那么任意一个都可以通过本题。
 * 如果不存在符合要求的答案，就请返回一个空的二维数组
 */

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  if (upper > colsum.length || lower > colsum.length) return []

  const res = Array.from({ length: 2 }, (_, i) => {
    return Array.from({ length: colsum.length }, (_, j) => 0)
  })

  for (let i = 0; i < colsum.length; i += 1) {
    if (colsum[i] === 2) {
      res[0][i] = 1
      res[1][i] = 1
      upper -= 1
      lower -= 1
    } else if (colsum[i] === 1) {
      if (upper >= lower) {
        res[0][i] = 1
        upper -= 1
      } else {
        res[1][i] = 1
        lower -= 1
      }
    }
  }
  if (upper !== 0 || lower !== 0) return []

  return res
}
