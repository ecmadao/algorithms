/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * This question is about implementing a basic elimination algorithm for Candy Crush.
 * Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies.
 * A value of board[i][j] = 0 represents that the cell at position (i, j) is empty.
 * The given board represents the state of the game following the player's move.
 * Now, you need to restore the board to a stable state by crushing candies according to the following rules:
 *
 * If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
 * After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
 * After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
 * If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
 * You need to perform the above rules until the board becomes stable, then return the current board.
 *
 * Example:
 * Input: board =  [
 *   [110,5,112,113,114],
 *   [210,211,5,213,214],
 *   [310,311,3,313,314],
 *   [410,411,412,5,414],
 *   [5,1,512,3,3],
 *   [610,4,1,613,614],
 *   [710,1,2,713,714],
 *   [810,1,2,1,1],
 *   [1,1,2,2,2],
 *   [4,1,4,4,1014]
 * ]
 * Output: [
 *   [0,0,0,0,0],
 *   [0,0,0,0,0],
 *   [0,0,0,0,0],
 *   [110,0,0,0,114],
 *   [210,0,0,0,214],
 *   [310,0,0,113,314],
 *   [410,0,0,213,414],
 *   [610,211,112,313,614],
 *   [710,311,412,613,714],
 *   [810,411,512,713,1014]
 * ]
 *
 * Note:
 * 1. The length of board will be in the range [3, 50].
 * 2. The length of board[i] will be in the range [3, 50].
 * 3. Each board[i][j] will initially start as an integer in the range [1, 2000].
 *
 * 这个问题是实现一个简单的消除算法。
 * 给定一个二维整数数组 board 代表糖果所在的方格，不同的正整数 board[i][j] 代表不同种类的糖果，如果 board[i][j] = 0 代表 (i, j) 这个位置是空的。
 * 给定的方格是玩家移动后的游戏状态，现在需要你根据以下规则粉碎糖果，使得整个方格处于稳定状态并最终输出。
 *
 * 如果有三个及以上水平或者垂直相连的同种糖果，同一时间将它们粉碎，即将这些位置变成空的。
 * 在同时粉碎掉这些糖果之后，如果有一个空的位置上方还有糖果，那么上方的糖果就会下落直到碰到下方的糖果或者底部，这些糖果都是同时下落，也不会有新的糖果从顶部出现并落下来。
 * 通过前两步的操作，可能又会出现可以粉碎的糖果，请继续重复前面的操作。
 * 当不存在可以粉碎的糖果，也就是状态稳定之后，请输出最终的状态。
 * 你需要模拟上述规则并使整个方格达到稳定状态，并输出
*/

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  if (!board.length) return []

  const ROW = board.length
  const COL = board[0].length

  const crush = () => {
    const result = []
    let row = 0
    while (row < ROW) {
      let c = 0
      while (c < COL) {
        let c1 = c
        while (c1 < COL && board[row][c1] === 0) c1 += 1
        let c2 = c1 + 1
        while (c2 < COL && board[row][c2] === board[row][c1]) c2 += 1
        if (c2 - c1 >= 3) for (let tmp = c1; tmp < c2; tmp += 1) result.push([row, tmp])
        c = c2
      }
      row += 1
    }

    let col = 0
    while (col < COL) {
      let r = 0
      while (r < ROW) {
        let r1 = r
        while (r1 < ROW && board[r1][col] === 0) r1 += 1
        let r2 = r1 + 1
        while (r2 < ROW && board[r2][col] === board[r1][col]) r2 += 1
        if (r2 - r1 >= 3) for (let tmp = r1; tmp < r2; tmp += 1) result.push([tmp, col])
        r = r2
      }
      col += 1
    }

    return result
  }

  const mark = (points) => {
    for (const [r, c] of points) board[r][c] = 0
  }

  const gravity = () => {
    for (let c = 0; c < COL; c += 1) {
      let r = ROW - 1

      while (r >= 0) {
        let r1 = r
        while (r1 > 0 && board[r1][c] !== 0) r1 -= 1
        if (r1 === 0) break
        let r2 = r1 - 1
        while (r2 >= 0 && board[r2][c] === 0) r2 -= 1
        if (r2 < 0) break

        while (r2 >= 0 && board[r2][c] !== 0) {
          board[r1][c] = board[r2][c]
          board[r2][c] = 0
          r2 -= 1
          r1 -= 1
        }
        r = r1
      }
    }
  }

  while (true) {
    const checked = crush()
    if (!checked.length) break
    mark(checked)
    gravity()
  }

  return board
}


// Test case 1
// [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]

// Test case 2
// [[2,5,5,3,5],[5,4,5,2,3],[2,2,4,5,4],[2,4,4,4,5],[5,2,3,3,5]]