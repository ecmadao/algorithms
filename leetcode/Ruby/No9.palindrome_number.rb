=begin
Difficulty:
Easy

Desc:
Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

Example:
Input: 121
Output: true

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
Therefore it is not a palindrome.

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
=end

# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  return false unless x >= 0
  s = x.to_s
  mid = s.size / 2
  return s[0...mid].reverse == (s.size % 2 == 0 ? s[mid...s.size] : s[mid + 1...s.size])
end

puts is_palindrome(121)
puts is_palindrome(1)
puts is_palindrome(0)
