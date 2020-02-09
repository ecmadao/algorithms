/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
 *
 * In one shift operation:
 * 1. Element at grid[i][j] moves to grid[i][j + 1].
 * 2. Element at grid[i][n - 1] moves to grid[i + 1][0].
 * 3. Element at grid[m - 1][n - 1] moves to grid[0][0].
 * 4. Return the 2D grid after applying shift operation k times
 *
 * Example 1:
 * Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
 * Output: [[9,1,2],[3,4,5],[6,7,8]]
 *
 * Example 2:
 * Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
 * Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
 *
 * Example 3:
 * Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
 * Output: [[1,2,3],[4,5,6],[7,8,9]]
 *
 * Constraints:
 * 1. m == grid.length
 * 2. n == grid[i].length
 * 3. 1 <= m <= 50
 * 4. 1 <= n <= 50
 * 5. -1000 <= grid[i][j] <= 1000
 * 6. 0 <= k <= 100
 *
 * 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
 * 每次「迁移」操作将会引发下述活动：
 * 1. 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
 * 2. 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
 * 3. 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
 * 4. 请你返回 k 次迁移操作后最终得到的 二维网格
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 *
 * 依次遍历。计算新的索引
 */
var shiftGrid_1 = function(grid, k) {
  if (!grid.length) return []
  if (!k || k % (grid.length * grid[0].length) === 0) return grid
  const count = k % (grid.length * grid[0].length)

  const result = []
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const step = grid[i].length - 1 - j

      if (count <= step) {
        if (!result[i]) result[i] = []
        result[i][j + count] = grid[i][j]
      } else {
        const tmp = count - (grid[i].length - 1 - j)
        const offsetRow = Math.ceil(tmp / grid[i].length)
        const col = (tmp - 1) % grid[i].length
        const row = (i + offsetRow) % grid.length

        if (!result[row]) result[row] = []
        result[row][col] =  grid[i][j]
      }
    }
  }
  return result
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 *
 * 铺平展开成为一维数组
 */
var shiftGrid_2 = function(grid, k) {
  if (!grid.length) return []
  if (!k || k % (grid.length * grid[0].length) === 0) return grid
  const count = k % (grid.length * grid[0].length)

  const nums = []
  for (const row of grid) {
    nums.push(...row)
  }
  const tail = nums.slice(nums.length - count)
  nums.splice(nums.length - count, count)
  nums.unshift(...tail)

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      grid[i][j] = nums[
        i * grid[i].length + j
      ]
    }
  }
  return grid
}
