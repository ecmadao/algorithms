/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a 2D grid from (0, 0) to (N-1, N-1), every cell contains a 1, except those cells in the given list mines which are 0. What is the largest axis-aligned plus sign of 1s contained in the grid? Return the order of the plus sign. If there is none, return 0.
 * An "axis-aligned plus sign of 1s of order k" has some center grid[x][y] = 1 along with 4 arms of length k-1 going up, down, left, and right, and made of 1s. This is demonstrated in the diagrams below. Note that there could be 0s or 1s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1s.
 *
 * Examples of Axis-Aligned Plus Signs of Order k:
 * Order 1:
 * 000
 * 010
 * 000
 *
 * Order 2:
 * 00000
 * 00100
 * 01110
 * 00100
 * 00000
 *
 * Order 3:
 * 0000000
 * 0001000
 * 0001000
 * 0111110
 * 0001000
 * 0001000
 * 0000000
 *
 * Example 1:
 * Input: N = 5, mines = [[4, 2]]
 * Output: 2
 * Explanation:
 * 11111
 * 11111
 * 11111
 * 11111
 * 11011
 * In the above grid, the largest plus sign can only be order 2.  One of them is marked in bold.
 *
 * Example 2:
 * Input: N = 2, mines = []
 * Output: 1
 * Explanation:
 * There is no plus sign of order 2, but there is of order 1.
 *
 * Example 3:
 * Input: N = 1, mines = [[0, 0]]
 * Output: 0
 * Explanation:
 * There is no plus sign, so return 0.
 *
 * Note:
 * 1. N will be an integer in the range [1, 500].
 * 2. mines will have length at most 5000.
 * 3. mines[i] will be length 2 and consist of integers in the range [0, N-1].
 * 4. (Additionally, programs submitted in C, C++, or C# will be judged with a slightly smaller time limit.)
 *
 * 在一个大小在 (0, 0) 到 (N-1, N-1) 的2D网格 grid 中，除了在 mines 中给出的单元为 0，其他每个单元都是 1。
 * 网格中包含 1 的最大的轴对齐加号标志是多少阶？返回加号标志的阶数。如果未找到加号标志，则返回 0。
 * 一个 k" 阶由 1 组成的“轴对称”加号标志具有中心网格  grid[x][y] = 1 ，以及4个从中心向上、向下、向左、向右延伸，长度为 k-1，由 1 组成的臂。
 * 下面给出 k" 阶“轴对称”加号标志的示例。注意，只有加号标志的所有网格要求为 1，别的网格可能为 0 也可能为 1
 */


/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
  // Test case 中 mines 都已经按照 行-列的顺序排好序，无需重复排序
  mines.sort((m1, m2) => {
    if (m1[0] === m2[0]) return m1[1] - m2[1]
    return m1[0] - m2[0]
  })
  const map = mines.reduce((dict, [row, col]) => {
    if (!dict.row[row]) dict.row[row] = []
    if (!dict.col[col]) dict.col[col] = []

    dict.row[row].push(col)
    dict.col[col].push(row)
    return dict
  }, { row: {}, col: {} })

  let result = 0
  let dp = []
  for (let r = 0; r < N; r += 1) {
    dp[r] = []
    for (let c = 0; c < N; c += 1) {
      if (map.row[r] && map.col[c] && map.row[r].indexOf(c) >= 0) {
        dp[r][c] = {
          top: 0,
          left: 0,
        }
        continue
      }

      const left = dp[r][c - 1] ? dp[r][c - 1].left : 0
      const top = dp[r - 1] ? dp[r - 1][c].top : 0
      if (left === 0 || top === 0 || N - c <= result || N - r <= result) {
        result = Math.max(result, 1)
        dp[r][c] = {
          top: top + 1,
          left: left + 1,
        }
        continue
      }

      let right = 0
      let bottom = 0
      if (!map.row[r] || map.row[r][map.row[r].length - 1] < c) {
        right = N - 1 - c
      } else {
        let i = 0
        while (map.row[r][i] < c) i += 1
        right = map.row[r][i] - 1 - c
      }
      if (!map.col[c] || map.col[c][map.col[c].length - 1] < r) {
        bottom = N - 1 - r
      } else {
        let i = 0
        while (map.col[c][i] < r) i += 1
        bottom = map.col[c][i] - 1 - r
      }

      result = Math.max(result, Math.min(left, right, bottom, top) + 1)
      dp[r][c] = {
        top: top + 1,
        left: left + 1,
      }
    }
  }
  return result
};