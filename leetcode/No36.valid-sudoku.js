/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules: http://sudoku.com.au/TheRules.aspx
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 *
 * 检查数独棋盘上的数字是否合法。还没有填充的数字用 '.' 表示
 * 注意：
 * 输入为 9 * 9 的数组
 * [
 *  [".", ".", ".", ".", "5", ".", ".", "1", "."],
 *  [".", "4", ".", "3", ".", ".", ".", ".", "."],
 *  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
 *  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
 *  [".", ".", "2", ".", "7", ".", ".", ".", "."],
 *  [".", "1", "5", ".", ".", ".", ".", ".", "."],
 *  [".", ".", ".", ".", ".", "2", ".", ".", "."],
 *  [".", "2", ".", "9", ".", ".", ".", ".", "."],
 *  [".", ".", "4", ".", ".", ".", ".", ".", "."]
 * ]
 * 其中，从 (0, 0) 到 (2, 2) 的 3 * 3 方格内表示宫1，并可由此类推
 */

/**
 * 利用数组规则，检查每行、每列、每宫内的数字是否合法（不能有重复）
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var data = {};
  var boxData = {};
  var validate = true;
  for (var i = 0; i < board.length; i += 1) {
    var box = board[i];
    var rowId = `r${i + 1}`;
    var boxRow = Math.floor(i / 3) + 1;

    var numbers = box.filter(item => item !== '.');
    if (new Set(numbers).size < numbers.length) {
        validate = false;
        break;
    }

    for (var j = 0; j < box.length; j += 1) {
      var columnId = `c${j + 1}`;
      var boxColumn = Math.floor(j / 3) + 1;
      var boxId = `b${(boxRow - 1) * 3 + boxColumn}`;

      if (!data[columnId]) {
        data[columnId] = new Set();
      }
      if (!data[rowId]) {
        data[rowId] = new Set();
      }
      var num = box[j];
      if (num === '.') continue;

      if (data[columnId].has(num) || data[rowId].has(num)) {
        validate = false;
        break;
      }

      data[columnId].add(num);
      data[rowId].add(num);

      if (!boxData[boxId]) {
        boxData[boxId] = [];
      }
      boxData[boxId].push(num);
    }

    if (!validate) break;
  }

  if (!validate) return validate;

  for (var i = 0; i < Object.keys(boxData).length; i += 1) {
    var box = boxData[Object.keys(boxData)[i]];
    if (box.length > new Set(box).size) {
      validate = false;
      break;
    }
  }

  return validate;
};
