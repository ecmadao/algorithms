=begin
求位于 1000~9999 之间，在数字上各个位之间添加四则运算符号，使得计算结果等于原数字逆序排列后得到的数字。
数位之间可以没有运算符，但总共至少要插入一个运算符

例如：
在 100~999 之间，满足要求的数字和运算有：
351 -> 3 * 51 = 153
621 -> 6 * 21 = 126
886 -> 8 * 86 = 688

关键：
1. 对运算符的剔除。
对于四位数，在各位之间，添加 +，-，/ 之后均不可能再满足结果仍是四位数的条件，因此只能使用 *
例如，9999 数位之间若使用 + 运算符，则最大只有 999 + 9 = 1008

2. 使用逆波兰表示法
https://zh.wikipedia.org/wiki/逆波兰表示法
=end

def rpn(queue)
  list = []
  while queue.size > 0 do
    item = queue.shift
    if item == "*" then
      list.push(list.pop() * list.pop())
    else
      list.push(item.to_i)
    end
  end
  return list.shift
end

def num_arithmetic(num)
  num = num.to_s
  queue = []

  (1..3).each do |i|
    s1 = num.slice(0, i)
    queue.push(s1)

    1.upto(4 - i).each do |j|
      s2 = num.slice(i, j)
      queue.push(s2)

      0.upto(4 - i - j).each do |h|
        s3 = num.slice(i + j, h)
        if s3 != "" then
          queue.push(s3)
        end

        0.upto(4 - i - j - h).each do |n|
          s4 = num.slice(i + j + h, n)
          if s4 != "" then
            queue.push(s4)
          end

          if i + j + h + n == 4 then
            queue += ["*"] * (queue.size - 1)
            if rpn(queue).to_s.reverse == num then
              return true
            end
          end
          if s4 != "" then
            queue.pop
          end
        end

        if s3 != "" then
          queue.pop
        end
      end
      queue.pop
    end
  end

  return false
end

def arithmetic()
  (1000..9999).each do |num|
    return num unless !num_arithmetic(num)
  end
end

puts arithmetic()
