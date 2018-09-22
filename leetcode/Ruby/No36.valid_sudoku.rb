=begin
Difficulty:
Medium

Desc:
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.
- The given board contain only digits 1-9 and the character '.'.
- The given board size is always 9x9.
=end

require 'set'

# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
  columns = []
  box = Hash.new

  board.each_with_index do |row, index|
    filtered_row = row.select { |num| num != '.' }
    return false unless Set.new(filtered_row).size == filtered_row.size
    row.each_with_index do |n, c|
      if columns[c] == nil then
        columns[c] = board.map { |r| r[c] }.select { |num| num != '.' }
        return false unless Set.new(columns[c]).size == columns[c].size
      end
      box_index = "#{index / 3}-#{c / 3}"
      if box[box_index] == nil then
        box[box_index] = []
      end
      if n != '.' then
        box[box_index].push(n)
      end
      if (index + 1) % 3 == 0 && (c + 1) % 3 == 0 then
        return false unless Set.new(box[box_index]).size == box[box_index].size
      end
    end
  end
  return true
end
