/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * On an 8 x 8 chessboard, there is one white rook.
 * There also may be empty squares, white bishops, and black pawns.
 * These are given as characters 'R', '.', 'B', and 'p' respectively.
 * Uppercase characters represent white pieces, and lowercase characters represent black pieces.
 * The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.
 * Also, rooks cannot move into the same square as other friendly bishops.
 * Return the number of pawns the rook can capture in one move.
 *
 * Example 1:
 * Input: [
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".","p",".",".",".","."],
 *  [".",".",".","R",".",".",".","p"],
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".","p",".",".",".","."],
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".",".",".",".",".","."]
 * ]
 * Output: 3
 * Explanation:
 * In this example the rook is able to capture all the pawns.
 *
 * Example 2:
 * Input: [
 *  [".",".",".",".",".",".",".","."],
 *  [".","p","p","p","p","p",".","."],
 *  [".","p","p","B","p","p",".","."],
 *  [".","p","B","R","B","p",".","."],
 *  [".","p","p","B","p","p",".","."],
 *  [".","p","p","p","p","p",".","."],
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".",".",".",".",".","."]
 * ]
 * Output: 0
 * Explanation:
 * Bishops are blocking the rook to capture any pawn.
 *
 * Example 3:
 * Input: [
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".","p",".",".",".","."],
 *  [".",".",".","p",".",".",".","."],
 *  ["p","p",".","R",".","p","B","."],
 *  [".",".",".",".",".",".",".","."],
 *  [".",".",".","B",".",".",".","."],
 *  [".",".",".","p",".",".",".","."],
 *  [".",".",".",".",".",".",".","."]
 * ]
 * Output: 3
 * Explanation:
 * The rook can capture the pawns at positions b5, d6 and f5.
 *
 * Note:
 * 1. board.length == board[i].length == 8
 * 2. board[i][j] is either 'R', '.', 'B', or 'p'
 * 3. There is exactly one cell with board[i][j] == 'R'
 *
 * 在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。大写字符表示白棋，小写字符表示黑棋。
 * 车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。另外，车不能与其他友方（白色）象进入同一个方格。
 * 返回车能够在一次移动中捕获到的卒的数量
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let result = 0

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] !== 'R') continue

      let left = j - 1
      while (left >= 0 && board[i][left] === '.') left -= 1
      if (board[i][left] === 'p') result += 1

      let right = j + 1
      while (right < board[i].length && board[i][right] === '.') right += 1
      if (board[i][right] === 'p') result += 1

      let top = i - 1
      while (top >= 0 && board[top][j] === '.') top -= 1
      if (top >= 0 && board[top][j] === 'p') result += 1

      let bottom = i + 1
      while (bottom < board.length && board[bottom][j] === '.') bottom += 1
      if (bottom < board.length && board[bottom][j] === 'p') result += 1

      return result
    }
  }
  return result
}
