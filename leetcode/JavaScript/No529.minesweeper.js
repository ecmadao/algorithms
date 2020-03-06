/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Let's play the minesweeper game
 * Wikipedia: https://en.wikipedia.org/wiki/Minesweeper_(video_game)
 * online game: http://minesweeperonline.com/
 *
 * You are given a 2D char matrix representing the game board.
 * 1. 'M' represents an unrevealed mine,
 * 2. 'E' represents an unrevealed empty square,
 * 3. 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines,
 * 4. digit ('1' to '8') represents how many mines are adjacent to this revealed square,
 * 5, and finally 'X' represents a revealed mine.
 *
 * Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:
 * 1. If a mine ('M') is revealed, then the game is over - change it to 'X'.
 * 2. If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
 * 3. If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
 * Return the board when no more squares will be revealed.
 *
 * Example 1:
 * Input:
 * [['E', 'E', 'E', 'E', 'E'],
 *  ['E', 'E', 'M', 'E', 'E'],
 *  ['E', 'E', 'E', 'E', 'E'],
 *  ['E', 'E', 'E', 'E', 'E']]
 * Click : [3,0]
 * Output:
 * [['B', '1', 'E', '1', 'B'],
 *  ['B', '1', 'M', '1', 'B'],
 *  ['B', '1', '1', '1', 'B'],
 *  ['B', 'B', 'B', 'B', 'B']]
 *
 * Example 2:
 * Input:
 * [['B', '1', 'E', '1', 'B'],
 *  ['B', '1', 'M', '1', 'B'],
 *  ['B', '1', '1', '1', 'B'],
 *  ['B', 'B', 'B', 'B', 'B']]
 * Click : [1,2]
 * Output:
 * [['B', '1', 'E', '1', 'B'],
 *  ['B', '1', 'X', '1', 'B'],
 *  ['B', '1', '1', '1', 'B'],
 *  ['B', 'B', 'B', 'B', 'B']]
 *
 * Note:
 * 1. The range of the input matrix's height and width is [1,50].
 * 2. The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.
 * 3. The input board won't be a stage when game is over (some mines have been revealed).
 * 4. For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over,
 *    consider any cases that you will win the game or flag any squares.
 *
 * 给定一个代表游戏板的二维字符矩阵。
 * 1. 'M' 代表一个未挖出的地雷
 * 2. 'E' 代表一个未挖出的空方块
 * 3. 'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块
 * 4. 数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻
 * 5. 'X' 则表示一个已挖出的地雷。
 *
 * 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：
 * 1. 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
 * 2. 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的方块都应该被递归地揭露。
 * 3. 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
 * 如果在此次点击中，若无更多方块可被揭露，则返回面板
 */


const getRound = (i, j) => {
  return [
    [i + 1, j],
    [i - 1, j],
    [i, j + 1],
    [i, j - 1],
    [i + 1, j + 1],
    [i + 1, j - 1],
    [i - 1, j - 1],
    [i - 1, j + 1]
  ]
}

const checkRound = (board, i, j) => {
  let mines = 0
  for (const [row, col] of getRound(i, j)) {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) continue
    if (board[row][col] === 'M') mines += 1
  }
  return mines
}

/**
* @param {character[][]} board
* @param {number[]} click
* @return {character[][]}
*/
var updateBoard = function(board, click) {
  const queue = [click]
  const ROW = board.length
  const COL = board[0].length

  while (queue.length) {
    const [i, j] = queue.pop()
    if (board[i][j] === 'M') {
      board[i][j] = 'X'
      break
    }
    const mines = checkRound(board, i, j)
    if (mines) {
      board[i][j] = `${mines}`
    } else {
      board[i][j] = 'B'
      for (const [row, col] of getRound(i, j)) {
        if (row < 0 || col < 0 || row >= ROW || col >= COL) continue
        if (board[row][col] !== 'E' && board[row][col] !== 'M') continue
        queue.push([row, col])
      }
    }
  }

  return board
}
