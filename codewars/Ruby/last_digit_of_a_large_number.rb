=begin
5 kyu

Description:
Define a function

def last_digit(n1, n2):
  return
that takes in two numbers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example:
the last decimal digit of 9^7 is 9, since 9^7 = 4782969.
The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.

The inputs to your function will always be non-negative integers.
=end

def last_digit(n1, n2)
  num = n1.to_s[-1].to_i
  return n2 == 0 ? 1 : num unless n2 > 1

  nums = [num]
  n = num * num
  while n.to_s[-1].to_i != num do
    nums.push(n.to_s[-1].to_i)
    n *= num
  end

  return nums[n2 % nums.size - 1]
end

puts last_digit(9, 0)
puts last_digit(9, 1)
puts last_digit(9, 7)
puts last_digit(2**200, 2**300)
# print last_digit(9, 7)
