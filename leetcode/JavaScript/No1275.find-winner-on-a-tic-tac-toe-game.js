/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
 * Here are the rules of Tic-Tac-Toe:
 * 1. Players take turns placing characters into empty squares (" ").
 * 2. The first player A always places "X" characters, while the second player B always places "O" characters.
 * 3. "X" and "O" characters are always placed into empty squares, never on filled ones.
 * 4. The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
 * 5. The game also ends if all squares are non-empty.
 * 6. No more moves can be played if the game is over.
 *
 * Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.
 * Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".
 * You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.
 *
 * Example 1:
 * Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
 * Output: "A"
 * Explanation: "A" wins, he always plays first.
 * "X  "    "X  "    "X  "    "X  "    "X  "
 * "   " -> "   " -> " X " -> " X " -> " X "
 * "   "    "O  "    "O  "    "OO "    "OOX"
 *
 * Example 2:
 * Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
 * Output: "B"
 * Explanation: "B" wins.
 * "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
 * "   " -> " O " -> " O " -> " O " -> "XO " -> "XO "
 * "   "    "   "    "   "    "   "    "   "    "O  "
 *
 * Example 3:
 * Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
 * Output: "Draw"
 * Explanation: The game ends in a draw since there are no moves to make.
 * "XXO"
 * "OOX"
 * "XOX"
 *
 * Example 4:
 * Input: moves = [[0,0],[1,1]]
 * Output: "Pending"
 * Explanation: The game has not finished yet.
 * "X  "
 * " O "
 * "   "
 *
 * Constraints:
 * 1. 1 <= moves.length <= 9
 * 2. moves[i].length == 2
 * 3. 0 <= moves[i][j] <= 2
 * 4. There are no repeated elements on moves.
 * 5. moves follow the rules of tic tac toe.
 *
 * A 和 B 在一个 3 x 3 的网格上玩井字棋。
 * 井字棋游戏的规则如下：
 * 1. 玩家轮流将棋子放在空方格 (" ") 上。
 * 2. 第一个玩家 A 总是用 "X" 作为棋子，而第二个玩家 B 总是用 "O" 作为棋子。
 * 3. "X" 和 "O" 只能放在空方格中，而不能放在已经被占用的方格上。
 * 4. 只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。
 * 5. 如果所有方块都放满棋子（不为空），游戏也会结束。
 * 6. 游戏结束后，棋子无法再进行任何移动。
 *
 * 给你一个数组 moves，其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。
 * 如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。
 * 你可以假设 moves 都 有效（遵循井字棋规则），网格最初是空的，A 将先行动
 */

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const cache = [{ row: {}, col: {}, diagonal1: {}, diagonal2: {} }, { row: {}, col: {}, diagonal1: {}, diagonal2: {} }]

  for (let i = 0; i < moves.length; i += 1) {
    const player = i % 2
    const [row, col] = moves[i]
    cache[player].row[row] = (cache[player].row[row] || 0) + 1
    cache[player].col[col] = (cache[player].col[col] || 0) + 1
    cache[player].diagonal1[row + col] = (cache[player].diagonal1[row + col] || 0) + 1
    cache[player].diagonal2[row - col] = (cache[player].diagonal2[row - col] || 0) + 1

    if (cache[player].row[row] === 3 || cache[player].col[col] === 3 || cache[player].diagonal1[row + col] === 3 || cache[player].diagonal2[row - col] === 3) return player ? 'B' : 'A'
  }

  return moves.length === 9 ? 'Draw' : 'Pending'
}
