/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * 
 * 示例 1：
 * 输入：m = 2, n = 3, k = 1
 * 输出：3
 * 
 * 示例 2：
 * 输入：m = 3, n = 1, k = 0
 * 输出：1
 * 
 * 提示：
 * 1 <= n,m <= 100
 * 0 <= k <= 20
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  const count = (i, j) => {
    let res = 0
    for (const k of `${i}${j}`) {
      res += Number(k)
    }
    return res
  }

  const board = []
  let res = 0
  const dfs = (i, j) => {
    if (count(i, j) > k) return

    if (!board[i]) board[i] = []
    board[i][j] = 1
    res += 1
    for (let [r, c] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
      if (r < 0 || c < 0 || r >= m || c >= n) continue
      if (board[r] && board[r][c]) continue
      dfs(r, c)
    }
  }

  dfs(0, 0)
  return res
}
