=begin
Difficulty:
Easy

Desc:
Given a 32-bit signed integer, reverse digits of an integer.

Example:
Input: 123
Output: 321

Input: -123
Output: -321

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
=end

# @param {Integer} x
# @return {Integer}
def reverse(x)
  m = x < 0 ? -1 : 1
  n = (x * m).to_s.chars.reverse!.join('').to_i * m
  return n < 2**31 -1 && n > -2**31 ? n : 0
end
