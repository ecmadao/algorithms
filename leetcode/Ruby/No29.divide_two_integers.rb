=begin
Difficulty:
Medium

Desc:
Given two integers dividend and divisor, divide two integers without using multiplication,
division and mod operator.

Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero.

Example:
Input: dividend = 10, divisor = 3
Output: 3

Input: dividend = 7, divisor = -3
Output: -2

Note:
Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
=end


def check_positive(num)
  return num >= 0 ? 1 : -1
end

def validator(num)
  return -2**31 unless num >= -2**31
  return 2**31 - 1 unless num <= 2**31 - 1
  return num
end

# @param {Integer} dividend
# @param {Integer} divisor
# @return {Integer}
def divide(dividend, divisor)
  s1 = check_positive(dividend)
  s2 = check_positive(divisor)

  dividend = dividend.abs
  divisor = divisor.abs

  return validator(s1 * s2 * dividend) unless divisor > 1

  result = 0

  1000.downto(1) do |multi|
    d = divisor * multi
    while dividend >= d do
      dividend -= d
      result += multi
      if s1 * s2 > 0 && result > 2**31 - 1 then
        return 2**31 - 1
      elsif s1 * s2 < 0 && result > 2**31 then
        return 2**31
      end
    end
  end

  return validator(result * s1 * s2)
end
