=begin
Difficulty:
Hard

Desc:
Given a string containing just the characters '(' and ')',
find the length of the longest valid (well-formed) parentheses substring.

Example:
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
=end

# @param {String} s
# @return {Integer}
def longest_valid_parentheses(s)
  queue = []
  len = 0
  left = -1

  s.chars.each_with_index do |str, index|
    if str == '(' then
      queue.push(index)
    else
      if queue.length > 0 then
        queue.pop
        start = queue.size > 0 ? queue[queue.size - 1] : left
        if index - start > len then
          len = index - start
        end
      else
        left = index
      end
    end
  end
  return len
end

# Test case
puts longest_valid_parentheses(")()())((()))") # 6
puts longest_valid_parentheses("))))())()()(()") # 4
puts longest_valid_parentheses("()") # 2