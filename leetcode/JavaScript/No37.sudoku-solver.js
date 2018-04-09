/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * Empty cells are indicated by the character '.'.
 * You may assume that there will be only one unique solution.
 *
 * 填写数独。数据结构和 36 题一样。假设只有一个解
 */

/**
 * 思路：
 * 惭愧，目前还没有什么很好的思路，现有的方法是比较常见的回溯法：
 * 从 (1, 1) 到 (9, 9) 遍历各个位置，在每个位置都进行如下操作：
 * 1. 从可选择的数中随机取一个
 * 2. 继续向后遍历，并检查合法性。如果数独已经不合法了，则回退，即把上次生成的结果清空，重新选择
 *
 * 因此，我们需要：
 * 1. 遍历初始的数独，获取到各行、各列、各宫可以填入的数据
 * 2. 从 (1, 1) 到 (9, 9) 遍历，跳过初始时已经填入数据的位置，在空位上进行随机取值
 * （每个位置上可取的值是其所在行、列、宫的交集）
 * 3. 利用回溯法继续遍历、回退
 */

var solve = function(tmp, row, column, maxRow, maxColumn, board, picked) {
  if (row > maxRow) return true;

  if (column === 0) {
    picked = new Set();
  }

  if (column > maxColumn) return solve(tmp, row + 1, 0, maxRow, maxColumn, board, picked);
  if (board[row][column] !== '.') return solve(tmp, row, column + 1, maxRow, maxColumn, board, picked);

  var rowId = `r${row + 1}`;
  var columnId = `c${column + 1}`;

  var boxRow = Math.floor(row / 3) + 1;
  var boxColumn = Math.floor(column / 3) + 1;
  var boxId = `b${boxRow}${boxColumn}`;

  var result = false;
  var rowSet = tmp[rowId];
  var columnSet = tmp[columnId];
  var boxSet = tmp[boxId];

  for (var val of rowSet.keys()) {
    if (picked.has(val)) continue;
    if (columnSet.has(val) && boxSet.has(val)) {
      picked.add(val);
      columnSet.delete(val);
      boxSet.delete(val);
      board[row][column] = val;
      if (solve(tmp, row, column + 1, maxRow, maxColumn, board, picked)) {
        result = true;
        break;
      } else {
        picked.delete(val);
        columnSet.add(val);
        boxSet.add(val);
        board[row][column] = '.';
      }
    }
  }

  return result;
};

var solveSudoku = function(board) {
  const tmp = {};

  for (var i = 0; i < board.length; i += 1) {
    var box = board[i];

    var rowId = `r${i + 1}`;
    var boxRow = Math.floor(i / 3) + 1;

    var rowOffset = Math.floor(i / 3) * 3;
    var colOffset = (i % 3) * 3;
    for (var j = 0; j < box.length; j += 1) {

      var columnId = `c${j + 1}`;
      var boxColumn = Math.floor(j / 3) + 1;
      var boxId = `b${boxRow}${boxColumn}`;

      if (!tmp[boxId]) {
        tmp[boxId] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
      }
      if (!tmp[columnId]) {
        tmp[columnId] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
      }
      if (!tmp[rowId]) {
        tmp[rowId] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
      }
      var num = box[j];
      if (num === '.') continue;

      tmp[columnId].delete(num);
      tmp[rowId].delete(num);
      tmp[boxId].delete(num);
    }
  }

  solve(
    tmp,
    0,
    0,
    board.length - 1,
    board[0].length - 1,
    board
  );
};

var BOARD = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(BOARD);
console.log(BOARD);