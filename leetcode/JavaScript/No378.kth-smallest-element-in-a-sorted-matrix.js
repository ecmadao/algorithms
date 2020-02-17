/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 *
 * Example:
 * matrix = [
 * [ 1,  5,  9],
 * [10, 11, 13],
 * [12, 13, 15]
 * ],
 * k = 8,
 * return 13.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ n2.
 *
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
 * 请注意，它是排序后的第k小元素，而不是第k个元素
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest_1 = function(matrix, k) {
  let count = 0
  let finalRow = 0

  const indexes = Array.from({ length: matrix.length }, (v, i) => 0)
  while (count < k) {
    let min = Infinity

    for (let row = 0; row < indexes.length; row += 1) {
      const column = indexes[row]
      if (column >= matrix.length) continue
      if (matrix[row][column] < min) {
        min = matrix[row][column]
        finalRow = row
      }
    }

    indexes[finalRow] += 1
    count += 1
  }

  return matrix[finalRow][indexes[finalRow] - 1]
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 *
 * 二分法:
 * 1. 找出二维矩阵中最小的数 left，最大的数 right，那么第 k 小的数必定在 left ~ right 之间
 * 2. mid = (left + right) / 2；在二维矩阵中寻找小于等于 mid 的元素个数 count
 * 3. 若这个 count 小于 k，表明第 k 小的数在右半部分且不包含 mid，即 left = mid + 1，又保证了第 k 小的数在 left ~ right 之间
 * 4. 若这个 count 大于 k，表明第 k 小的数在左半部分且可能包含 mid，即 right = mid，又保证了第 k 小的数在 left ~ right 之间
 * 5. 因为每次循环中都保证了第 k 小的数在 left ~ right 之间，当 left == right 时，第 k 小的数即被找出，等于 right
 *
 * 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/solution/er-fen-chao-ji-jian-dan-by-jacksu1024/
 */
var kthSmallest_2 = function(matrix, k) {
  let left = matrix[0][0]
  let right = matrix[matrix.length - 1][matrix.length - 1]

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    let count = 0

    for (const row of matrix) {
      for (const num of row) {
        if (num <= mid) {
          count += 1
        } else {
          break
        }
      }
    }
    if (count < k) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return right
}

// Test case
console.log(
  kthSmallest_2([[2,1,1],[2,3,1],[3,4,1]], 4) // 2
)
console.log(
  kthSmallest_2([[1,2,1],[2,3,2],[1,3,2]], 3) // 1
)
console.log(
  kthSmallest_2([[2,1,1],[2,3,1],[3,4,1]], 4) // 2
)
console.log(
  kthSmallest_2([[1,2,1],[2,3,2],[1,3,4]], 3) // 1
)
