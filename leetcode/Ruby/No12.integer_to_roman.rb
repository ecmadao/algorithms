=begin
Difficulty:
Medium

Desc:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example:
Input: 3
Output: "III"

Input: 4
Output: "IV"

Input: 9
Output: "IX"

Input: 58
Output: "LVIII"
Explanation: C = 100, L = 50, XXX = 30 and III = 3.

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
=end

class Integer
  def to_roman
    roman_map = { "1" => "I", "5" => "V", "10" => "X", "50" => "L", "100" => "C", "500" => "D", "1000" => "M" }
    num = self
    ratio = 1
    while num >= 10 do
      num /= 10
      ratio *= 10
    end

    val = case num
          when 1...4 then roman_map[ratio.to_s] * num
          when 4 then roman_map[ratio.to_s] + roman_map[(5 * ratio).to_s]
          when 5 then roman_map[(5 * ratio).to_s]
          when 6...9 then roman_map[(5 * ratio).to_s] + roman_map[ratio.to_s] * (num - 5)
          when 9 then roman_map[ratio.to_s] + roman_map[(ratio * 10).to_s]
          else ""
          end
    return val
  end
end

# @param {Integer} num
# @return {String}
def int_to_roman(num)
  divisor = 1
  result = ""
  while divisor <= num do
    divisor *= 10
    remain = num % divisor
    num -= remain
    result = remain.to_roman + result
  end
  return result
end
