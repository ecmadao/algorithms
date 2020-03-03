/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Think about Zuma Game. You have a row of balls on the table, colored red(R), yellow(Y), blue(B), green(G), and white(W). You also have several balls in your hand.
 * Each time, you may choose a ball in your hand, and insert it into the row (including the leftmost place and rightmost place).
 * Then, if there is a group of 3 or more balls in the same color touching, remove these balls. Keep doing this until no more balls can be removed.
 * Find the minimal balls you have to insert to remove all the balls on the table. If you cannot remove all the balls, output -1.
 *
 * Example 1:
 * Input: board = "WRRBBW", hand = "RB"
 * Output: -1
 * Explanation: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW
 *
 * Example 2:
 * Input: board = "WWRRBBWW", hand = "WRBRW"
 * Output: 2
 * Explanation: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty
 *
 * Example 3:
 * Input: board = "G", hand = "GGGGG"
 * Output: 2
 * Explanation: G -> G[G] -> GG[G] -> empty
 *
 * Example 4:
 * Input: board = "RBYYBBRRB", hand = "YRBGB"
 * Output: 3
 * Explanation: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty
 *
 * Constraints:
 * 1. You may assume that the initial row of balls on the table won’t have any 3 or more consecutive balls with the same color.
 * 2. The number of balls on the table won't exceed 16, and the string represents these balls is called "board" in the input.
 * 3. The number of balls in your hand won't exceed 5, and the string represents these balls is called "hand" in the input.
 * 4. Both input strings will be non-empty and only contain characters 'R','Y','B','G','W'.
 *
 * 回忆一下祖玛游戏。现在桌上有一串球，颜色有红色(R)，黄色(Y)，蓝色(B)，绿色(G)，还有白色(W)。 现在你手里也有几个球。
 * 每一次，你可以从手里的球选一个，然后把这个球插入到一串球中的某个位置上（包括最左端，最右端）。接着，如果有出现三个或者三个以上颜色相同的球相连的话，就把它们移除掉。重复这一步骤直到桌上所有的球都被移除。
 * 找到插入并可以移除掉桌上所有球所需的最少的球数。如果不能移除桌上所有的球，输出 -1
 *
 * 注意三点：
 * 1. 每次插入的时候，可以从手中选取任意球
 * 2. 可以插入到任意位置
 * 3. 大于等于 3 个连续的球不能存在，必被消除
 */

// 不断消除 >= 3 的连续的球
const crash = (list, index) => {
  const result = [...list]
  while (result.length >= 3) {
    let right = index
    while (right < result.length && result[right + 1] === result[right]) right += 1
    let left = index
    while (left >= 0 && result[left - 1] === result[left]) left -= 1

    if (right - left + 1 < 3) break
    result.splice(left, right - left + 1)
    index = Math.max(left - 1, 0)
  }
  return result
}

/**
* @param {string} board
* @param {string} hand
* @return {number}
*/
var findMinStep = function(board, hand) {
  const handMap = hand.split('').reduce((m, ball) => {
    m[ball] = (m[ball] || 0) + 1
    return m
  }, {})
  const boardMap = board.split('').reduce((m, ball) => {
    m[ball] = (m[ball] || 0) + 1
    return m
  }, {})

  for (const key of Object.keys(handMap)) {
    if (!boardMap[key]) {
      delete handMap[key]
      continue
    }
    if (boardMap[key] + handMap[key] < 3) return -1
  }

  const dfs = (candidate, list) => {
    if (
      !list.length ||
      (list.length >= 3 && new Set(list).size === 1)
    ) return 0

    let result = Infinity
    for (const ball of Object.keys(candidate)) {
      if (!candidate[ball]) continue

      let i = 0
      while (i < list.length) {
        list.splice(i, 0, ball)
        candidate[ball] -= 1

        result = Math.min(result, 1 + dfs(candidate, crash(list, i)))

        candidate[ball] += 1
        list.splice(i, 1)

        while (list[i] === ball) i += 1
        i += 1
      }
    }

    return result
  }

  const result = dfs(handMap, board.split(''))
  return result === Infinity ? -1 : result
}

// Test case
// RRWWRRBBRR, WB
// RRWWRRBBRR -> RRWWRRBBR(W)R -> RRWWRRBB(B)R(W)R -> RRWWRRR(W)R -> RRWW(W)R -> RRR -> ""
