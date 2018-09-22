=begin
Difficulty:
Hard

Desc:
Write a program to solve a Sudoku puzzle by filling the empty cells.
A sudoku solution must satisfy all of the following rules:
- Each of the digits 1-9 must occur exactly once in each row.
- Each of the digits 1-9 must occur exactly once in each column.
- Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
- Empty cells are indicated by the character '.'.

Note:
- The given board contain only digits 1-9 and the character '.'.
- You may assume that the given Sudoku puzzle will have a single unique solution.
- The given board size is always 9x9.
=end

def sudoku(board, positions, row_tmp, column_tmp, box_tmp)
  return true unless positions.size > 0

  row_index, column_index = positions.shift
  box_index = 3 * (row_index / 3) + column_index / 3

  available_nums = row_tmp[row_index] & column_tmp[column_index] & box_tmp[box_index]

  available_nums.each do |num|
    board[row_index][column_index] = num
    row_tmp[row_index] -= [num]
    column_tmp[column_index] -= [num]
    box_tmp[box_index] -= [num]

    result = sudoku(board, positions, row_tmp, column_tmp, box_tmp)
    return true unless !result

    board[row_index][column_index] = '.'
    row_tmp[row_index] += [num]
    column_tmp[column_index] += [num]
    box_tmp[box_index] += [num]
  end

  positions.unshift([row_index, column_index])
  return false
end

# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def solve_sudoku(board)
  row_tmp = []
  column_tmp = []
  box_tmp = []
  positions = []
  base = ["1","2","3","4","5","6","7","8","9"]

  (0...9).each do |row_index|
    row_tmp[row_index] = base - board[row_index]

    (0...9).each do |column_index|
      if column_tmp[column_index] == nil then
        column_tmp[column_index] = base
      end
      box_index = 3 * (row_index / 3) + (column_index / 3)
      puts "box_index: #{box_index}"
      if box_tmp[box_index] == nil then
        box_tmp[box_index] = base
      end

      col = board[row_index][column_index]
      if col == '.' then
        positions.push([row_index, column_index])
      else
        column_tmp[column_index] -= [col]
        box_tmp[box_index] -= [col]
      end
    end
  end

  sudoku(board, positions, row_tmp, column_tmp, box_tmp)
  return nil
end

board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
solve_sudoku(board)
print board
