/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * Example:
 * Given board =
 * [
 *    ['A','B','C','E'],
 *    ['S','F','C','S'],
 *    ['A','D','E','E']
 * ]
 * word = "ABCCED", -> returns true,
 * word = "SEE", -> returns true,
 * word = "ABCB", -> returns false.
 *
 * 对于给定的二维字符数组 board 和给定的字符串 word，
 * 判断是否存在 board 中的一条路径，其路径上的字符正好按顺序组成 word。
 * 不能重复使用走过的路径
 * 依旧是回溯算法
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length) return false;
  var maxRow = board.length - 1;
  var maxColumn = board[0].length - 1;

  var findWord = function(used, x, y, wordIndex, bannedPosition) {
      if (wordIndex >= word.length) return true;
      var success = false;

      var positions = [];
      if (x > 0 && bannedPosition !== 'top') {
        positions.push([x - 1, y, 'bottom']);
      }
      if (x < maxRow && bannedPosition !== 'bottom') {
        positions.push([x + 1, y, 'top']);
      }
      if (y > 0 && bannedPosition !== 'left') {
        positions.push([x, y - 1, 'right']);
      }
      if (y < maxColumn && bannedPosition !== 'right') {
        positions.push([x, y + 1, 'left']);
      }
      for (var i = 0; i < positions.length; i += 1) {
        var r = positions[i][0];
        var c = positions[i][1];
        var b = positions[i][2];
        var key = r + '&' + c;
        if (board[r][c] === word[wordIndex] && !used[key]) {
          used[key] = true;
          success = findWord(used, r, c, wordIndex + 1, b);
          if (success) {
            return success;
          }
          used[key] = false;
        }
      }
      return success;
  };

  var usedTemp = {};
  for (var i = 0; i <= maxRow; i += 1) {
    var row = board[i];
    for (var j = 0; j <= maxColumn; j += 1) {
      if (row[j] === word[0]) {
        var key = i + '&' + j;
        usedTemp[key] = true;
        if (findWord(usedTemp, i, j, 1, '')) {
          return true;
        }
        usedTemp[key] = false;
      }
    }
  }
  return false;
};

// Test case
console.log(exist(
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],
  'ABCB'
));
console.log(exist(
  ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaab"],
  "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
));
