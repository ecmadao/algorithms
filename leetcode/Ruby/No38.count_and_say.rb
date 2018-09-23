=begin
Difficulty:
Easy

Desc:
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note:
Each term of the sequence of integers will be represented as a string.

Example:
Input: 1
Output: "1"

Input: 4
Output: "1211"

n = 1 时,输出字符串 1
n = 2 时，输出上次字符串中的数值个数，因为上次字符串有 1 个 1，所以输出 11
n = 3 时，由于上次字符是 11，有 2 个 1，所以输出 21
n = 4 时，由于上次字符串是 21，有 1 个 2 和 1 个 1，所以输出 1211
依次类推

Wiki: 外观数列 https://zh.wikipedia.org/wiki/外观数列
=end

# @param {Integer} n
# @return {String}
def count_and_say(n)
  result = "1"

  2.upto(n).each do |_|
    i = 0
    tmp = ""
    while i < result.size do
      char = result[i]
      count = 1
      while result[i] == result[i + 1] do
        i += 1
        count += 1
      end
      i += 1
      tmp += "#{count}#{char}"
    end
    result = tmp
  end

  return result
end

# Test case
puts count_and_say(1)
puts count_and_say(2)
puts count_and_say(3)
puts count_and_say(4)
puts count_and_say(5)
puts count_and_say(6)
puts count_and_say(7)
puts count_and_say(8)
puts count_and_say(9)
puts count_and_say(10)
