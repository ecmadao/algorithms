=begin
Difficulty:
Easy

Desc:
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
=end

# @param {String} s
# @return {Boolean}
def is_valid(s)
  hash = { ")" => "(", "]" => "[", "}" => "{" }
  list = []
  s.chars.each do |char|
    if !hash[char] then
      list.push(char)
    else
      last = list.pop
      return false if last != hash[char]
    end
  end
  return list.size == 0
end
