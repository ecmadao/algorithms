
var solve = function(tmp, row, column, maxRow, maxColumn, board, picked) {
  if (row > maxRow) return true;

  if (column === 0) {
    picked = new Set();
  }

  if (column > maxColumn) return solve(tmp, row + 1, 0, maxRow, maxColumn, board, picked);
  if (board[row][column] !== 0) return solve(tmp, row, column + 1, maxRow, maxColumn, board, picked);

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
        board[row][column] = 0;
      }
    }
  }

  return result;
};

function sudoku(board) {
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
        tmp[boxId] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      }
      if (!tmp[columnId]) {
        tmp[columnId] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      }
      if (!tmp[rowId]) {
        tmp[rowId] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      }
      var num = box[j];
      if (num === 0) continue;

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
  return board
}
