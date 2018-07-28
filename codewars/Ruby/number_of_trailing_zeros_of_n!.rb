=begin
5 kyu

Description:
Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 * ... * N
Be careful 1000! has 2568 digits...
For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples:
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
=end

def zeros(n)
  count = 0
  while n > 1 do
    count += n / 5
    n /= 5
  end
  return count
end

# puts zeros(10)
# puts zeros(30) # 7
# puts zeros(999999) # 7
puts zeros(1000000000) # 7
