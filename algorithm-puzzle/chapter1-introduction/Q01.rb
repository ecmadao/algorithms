=begin
求用十进制、二进制、八进制表示都是回文数的所有数中，大于十进制数 10 的最小数
注：二进制前不能补 0

问题关键：
要求数字在二进制下是回文，则其末位不能为 0，只能是 1，因为数字一定是奇数
=end

def palindrome_num()
  from = 11
  while true
    if from.to_s == from.to_s.reverse &&
      from.to_s(2) == from.to_s(2).reverse &&
      from.to_s(8) == from.to_s(8).reverse then
      return from
    end
    from += 2
  end
end
