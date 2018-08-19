=begin
Difficulty:
Easy

Desc:
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example:
Input: ["flower","flow","flight"]
Output: "fl"

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
=end

# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  return "" unless strs.size > 0

  str = strs[0]
  str.chars.each_with_index do |s, i|
    prefix = str[0..i]
    check = strs.all? { |item| item.start_with?(prefix) }
    return (i > 0 ? str[0...i] : "") unless check
  end
  return str
end
