=begin
Difficulty:
Medium

Desc:
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example:
given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
=end

def build_parenthesis(base, n, remain, index, min)
  str = String.new(base)
  return [str] unless remain > 0

  results = []
  [index, remain].min.downto(min) do |c|
    str[index, 0] = ")" * c
    results += build_parenthesis(str, n, remain - c, index - 1, [n - index + 2 - (n - remain + c), 0].max)
    str.slice!(index, c)
  end
  return results
end

# @param {Integer} n
# @return {String[]}
def generate_parenthesis(n)
  base = "(" * n
  i = n - 1
  return build_parenthesis(base, n, n, n, 1)
end

print generate_parenthesis(3) # ["((()))", "(()())", "()(())", "(())()", "()()()"]
puts ""
print generate_parenthesis(4) # ["(((())))", "((()()))", "(()(()))", "()((()))", "((())())", "(()()())", "()(()())", "(())(())", "()()(())", "((()))()", "(()())()", "()(())()", "(())()()", "()()()()"]