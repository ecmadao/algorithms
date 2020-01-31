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


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let bi = 0
  let bj = 0

  const map = {
    row: {},
    column: {}
  }

  const checkValidate = (i, j) => {
    const set = new Set()
    for (let row = i; row < i + 3; row += 1) {
      if (map.row[row] === undefined) {
        const nums = board[row].filter(n => n !== '.')
        map.row[row] = new Set(nums).size === nums.length
      }
      if (!map.row[row]) return false

      for (let column = j; column < j + 3; column += 1) {
        if (board[row][column] !== '.') {
          if (!map.column[column]) map.column[column] = []
          map.column[column].push(board[row][column])
          if (set.has(board[row][column])) return false
          set.add(board[row][column])
        }
      }
    }
    return true
  }

  while (bi <= 2 && bj <= 2) {
    const check = checkValidate(bi * 3, bj * 3)
    if (!check) return false

    if (bj === 2) {
      bi += 1
      bj = 0
    } else {
      bj += 1
    }
  }

  return Object.values(map.column).every(column => new Set(column).size === column.length)
}

// Test case

console.log(
  // false
  isValidSudoku(
    [
      [".",".","4",".",".",".","6","3","."],
      [".",".",".",".",".",".",".",".","."],
      ["5",".",".",".",".",".",".","9","."],
      [".",".",".","5","6",".",".",".","."],
      ["4",".","3",".",".",".",".",".","1"],
      [".",".",".","7",".",".",".",".","."],
      [".",".",".","5",".",".",".",".","."],
      [".",".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".",".","."]
    ]
  )
)
