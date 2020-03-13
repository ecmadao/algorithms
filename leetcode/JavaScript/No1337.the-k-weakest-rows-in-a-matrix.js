/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians),
 * return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
 * A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j.
 * Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.
 *
 * Example 1:
 * Input: mat =
 * [[1,1,0,0,0],
 *  [1,1,1,1,0],
 *  [1,0,0,0,0],
 *  [1,1,0,0,0],
 *  [1,1,1,1,1]],
 * k = 3
 * Output: [2,0,3]
 * Explanation:
 * The number of soldiers for each row is:
 * row 0 -> 2
 * row 1 -> 4
 * row 2 -> 1
 * row 3 -> 2
 * row 4 -> 5
 * Rows ordered from the weakest to the strongest are [2,0,3,1,4]
 *
 * Example 2:
 * Input: mat =
 * [[1,0,0,0],
 *  [1,1,1,1],
 *  [1,0,0,0],
 *  [1,0,0,0]],
 * k = 2
 * Output: [0,2]
 * Explanation:
 * The number of soldiers for each row is:
 * row 0 -> 1
 * row 1 -> 4
 * row 2 -> 1
 * row 3 -> 1
 * Rows ordered from the weakest to the strongest are [0,2,3,1]
 *
 * Constraints:
 * 1. m == mat.length
 * 2. n == mat[i].length
 * 3. 2 <= n, m <= 100
 * 4. 1 <= k <= m
 * 5. matrix[i][j] is either 0 or 1.
 *
 * 给你一个大小为 m * n 的方阵 mat，方阵由若干军人和平民组成，分别用 0 和 1 表示。
 * 请你返回方阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
 * 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
 * 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const res = []
  const cache = {}

  const search = (target) => {
    let i = 0
    let j = res.length - 1
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      const count = cache[res[mid]]
      if (count <= target) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
    return i
  }

  for (let i = 0; i < mat.length; i += 1) {
    let j = -1
    while (j < mat[i].length - 1 && mat[i][j + 1] === 1) j += 1
    if (res.length === k && cache[res[res.length - 1]] <= j) continue
    cache[i] = j + 1
    const index = search(j + 1)
    res.splice(index, 0, i)
    if (res.length > k) res.pop()
  }
  return res
}
