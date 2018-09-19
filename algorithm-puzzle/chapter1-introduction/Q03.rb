=begin
有 N 张纸牌从 1~N 排列，且正面朝下。
从第 1 张纸牌开始翻拍，每隔 1 个纸牌翻转一个
从第 2 张纸牌开始翻拍，每隔 2 个纸牌翻转一个
...
从第 X 张纸牌开始翻拍，每隔 X - 1 个纸牌翻转一个
...
翻转第 N 张纸牌

求最后仍旧正面朝下的纸牌
=end

def divisor_count(num)
  count = 1
  tmp = 0
  (2...num).each do |i|
    if i * i >= num then
      return i * i == num ? count + tmp + 1 : count + tmp
    end
    if num % i == 0 then
      count += 1
      tmp += 1
    end
  end
  return count + tmp
end

def flip_cards(count)
  nums = []
  (1..count).each do |num|
    if divisor_count(num) % 2 == 0 then
      nums.push(num)
    end
  end
  return nums
end

puts flip_cards(100)
