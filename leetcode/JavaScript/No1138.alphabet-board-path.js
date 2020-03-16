/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].
 * Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.
 * [
 *     "abcde",
 *     "fghij",
 *     "klmno",
 *     "pqrst",
 *     "uvwxy",
 *     "z"
 * ]
 *
 * We may make the following moves:
 * 1. 'U' moves our position up one row, if the position exists on the board;
 * 2. 'D' moves our position down one row, if the position exists on the board;
 * 3. 'L' moves our position left one column, if the position exists on the board;
 * 4. 'R' moves our position right one column, if the position exists on the board;
 * 5. '!' adds the character board[r][c] at our current position (r, c) to the answer.
 * (Here, the only positions that exist on the board are positions with letters on them.)
 * Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.
 *
 * Example 1:
 * Input: target = "leet"
 * Output: "DDR!UURRR!!DDD!"
 *
 * Example 2:
 * Input: target = "code"
 * Output: "RR!DDRR!UUL!R!"
 *
 * Constraints:
 * 1. 1 <= target.length <= 100
 * 2. target consists only of English lowercase letters.
 *
 * 我们从一块字母板上的位置 (0, 0) 出发，该坐标对应的字符为 board[0][0]。
 * 在本题里，字母板为board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"].
 *
 * 我们可以按下面的指令规则行动：
 * 1. 如果方格存在，'U' 意味着将我们的位置上移一行；
 * 2. 如果方格存在，'D' 意味着将我们的位置下移一行；
 * 3. 如果方格存在，'L' 意味着将我们的位置左移一列；
 * 4. 如果方格存在，'R' 意味着将我们的位置右移一列；
 * 5. '!' 会把在我们当前位置 (r, c) 的字符 board[r][c] 添加到答案中。
 * 返回指令序列，用最小的行动次数让答案和目标 target 相同。你可以返回任何达成目标的路径。
 */


const board = [
  "abcde",
  "fghij",
  "klmno",
  "pqrst",
  "uvwxy",
  "z"
]

/**
* @param {string} target
* @return {string}
*/
var alphabetBoardPath = function(target) {
  const res = []
  let start = 97
  let index = 0
  for (const str of target) {
    const code = str.charCodeAt()
    let i = Math.floor((code - 97) / 5)

    if (str === 'z') {
      res.push(
        Array.from({ length: (start - 97) - Math.floor((start - 97) / 5) * 5 }, (_, i) => 'L').join(''),
        ...Array.from({ length: i - index }, (_, i) => 'D').join(''),
        '!'
      )
    } else {
        const tmp = start + (i - index) * 5
        res.push(
          Array.from({ length: Math.abs(index - i) }, (_, j) => i < index ? 'U' : 'D').join(''),
          Array.from({ length: Math.abs(tmp - code) }, (_, i) => tmp < code ? 'R' : 'L').join(''),
          '!'
        )
    }

    start = code
    index = i
  }
  return res.join('')
}
