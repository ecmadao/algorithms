=begin
Difficulty:
Medium

Desc:
Given two non-negative integers num1 and num2 represented as strings,
return the product of num1 and num2, also represented as a string.

Example:
Input: num1 = "2", num2 = "3"
Output: "6"

Input: num1 = "123", num2 = "456"
Output: "56088"

Note:
- The length of both num1 and num2 is < 110.
- Both num1 and num2 contain only digits 0-9.
- Both num1 and num2 do not contain any leading zero, except the number 0 itself.
- You must not use any built-in BigInteger library or convert the inputs to integer directly.
=end

# @param {String} num1
# @param {String} num2
# @return {String}
def multiply(num1, num2)
  if num1[0] == "0" || num2[0] == "0" then
    return "0"
  end

  n1 = num1.size >= num2.size ? num1 : num2
  n2 = num1.size >= num2.size ? num2 : num1
  n2.reverse!
  lists = []
  max = 0

  n1.chars.each_with_index do |c1, index|
    list = [0] * (n1.size - 1 - index)
    tmp = 0
    n2.chars.each do |c2|
      product = c2.to_i * c1.to_i + tmp
      if product >= 10 then
        list.push(product % 10)
        tmp = product / 10
      else
        list.push(product)
        tmp = 0
      end
    end
    if tmp > 0 then
      list.push(tmp)
    end
    lists.push(list)
    max = [max, list.size].max
  end

  result = []
  i = 0
  tmp = 0
  while i < max do
    j = 0
    index = max - 1 - i
    while j < lists.size do
      list = lists[j]
      result[index] = list[i] + (result[index] == nil ? 0 : result[index])

      if i == list.size - 1 then
        lists.delete_at(j)
      else
        j += 1
      end
    end
    num = result[index] + tmp
    result[index] = num % 10
    tmp = num / 10
    i += 1
  end
  if tmp > 0 then
    result.unshift(tmp)
  end
  result.join("")
end

# Test case
puts multiply("123", "456")
puts multiply("1234", "456")
puts multiply("123456789", "9")
puts multiply("123456789", "987654321")
