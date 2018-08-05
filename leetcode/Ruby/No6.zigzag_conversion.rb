=begin
Difficulty:
Medium

Desc:
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);

Example:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
=end

# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
  return s unless (num_rows > 1 && num_rows < s.size)

  lists = []
  index = 0
  while index < s.size do
    tmp_index = index % (num_rows - 1)
    tmp = index / (num_rows - 1) % 2 === 0
    list_index = tmp_index === 0 ? (tmp ? 0 : (num_rows - 1)) : (tmp ? tmp_index : (num_rows - 1) - tmp_index)

    if !lists[list_index] then
      lists[list_index] = []
    end

    lists[list_index].push(s[index])
    index += 1
  end
  return lists.inject([]) { |r, list| r + list }.join('')
end
