/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9,
 * count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.
 *
 * Rules for a valid pattern:
 * 1. Each pattern must connect at least m keys and at most n keys.
 * 2. All the keys must be distinct.
 * 3. If the line connecting two consecutive keys in the pattern passes through any other keys,
 * the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
 * 4. The order of keys used matters.
 *
 * Explanation:
 * | 1 | 2 | 3 |
 * | 4 | 5 | 6 |
 * | 7 | 8 | 9 |
 *
 * Invalid move: 4 - 1 - 3 - 6
 * Line 1 - 3 passes through key 2 which had not been selected in the pattern.
 *
 * Invalid move: 4 - 1 - 9 - 2
 * Line 1 - 9 passes through key 5 which had not been selected in the pattern.
 *
 * Valid move: 2 - 4 - 1 - 3 - 6
 * Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern
 *
 * Valid move: 6 - 5 - 4 - 1 - 9 - 2
 * Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.
 *
 * Example:
 * Input: m = 1, n = 1
 * Output: 9
 *
 * 我们都知道安卓有个手势解锁的界面，是一个 3 x 3 的点所绘制出来的网格。
 * 给你两个整数，分别为 m 和 n，其中 1 ≤ m ≤ n ≤ 9，那么请你统计一下有多少种解锁手势，是至少需要经过 m 个点，但是最多经过不超过 n 个点的。
 *
 * 先来了解下什么是一个有效的安卓解锁手势:
 * 1. 每一个解锁手势必须至少经过 m 个点、最多经过 n 个点。
 * 2. 解锁手势里不能设置经过重复的点。
 * 3. 假如手势中有两个点是顺序经过的，那么这两个点的手势轨迹之间是绝对不能跨过任何未被经过的点。
 * 4. 经过点的顺序不同则表示为不同的解锁手势
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 * DFS 回溯
 */
var numberOfPatterns = function(m, n) {
  const board = Array.from({ length: 3 }, (_, i) => {
    return Array.from({ length: 3 }, (_, j) => i * 3 + (j + 1))
  })

  let result = 0
  const dfs = (walked, index) => {
    if (walked > n) return
    if (walked >= m && walked <= n) {
      result += 1
      if (walked === n) return
    }

    const row = Math.floor(index / 3)
    const col = index % 3
    board[row][col] = -1

    for (let i = 0; i < 9; i += 1) {
      if (i === index) continue
      const r = Math.floor(i / 3)
      const c = i % 3
      if (board[r][c] === -1) continue

      if (r === row) {
        if (Math.abs(c - col) === 2) {
          // 同一行，有跳过
          if (board[r][(c + col) / 2] !== -1) continue
        }
      } else if (c === col) {
        if (Math.abs(r - row) === 2) {
          // 同一列，有跳过
          if (board[(r + row) / 2][c] !== -1) continue
        }
      } else {
        if (Math.abs(r - row) === 2 && Math.abs(c - col) === 2) {
          // 对角线，有跳过
          if (board[(r + row) / 2][(c + col) / 2] !== -1) continue
        }
      }
      dfs(walked + 1, i)
    }

    board[row][col] = row * 3 + (col + 1)
  }

  for (let i = 0; i < 9; i += 1) {
    dfs(1, i)
  }

  return result
}
