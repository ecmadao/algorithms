=begin
假设要把长度为 n 的木棒切分为 1cm 长的小段，但 1 根木棒一次只能由一个人切分。当木棒被切分为 x 个长度大于 1cm 的
木棒时，一次性最多可以由 x 个人切分
求问当有 m 个人存在时，至少需要切分几次

例：
木棒长度 n = 8
人数 m = 3
第一次切分，1 人把木棒切分为 2 个 4cm 长度的木棒
第二次切分，2 人把 2 个 4cm 长的木棒切分为 4 个 2cm 长的木棒
第三次切分，3 人把 3 个 2cm 长的木棒切分为 6 个 1cm 长的木棒
第四次切分，1 人把剩余的 1 个 2cm 长的木棒切分为 2 个 1cm 长的木棒
=end

def cutting_stick(len, people)
  queue = [len]
  count = 0

  while queue.size > 0 do
    tmp = []
    (1..people).each do |_|
      stick = queue.shift()
      s1 = stick / 2
      s2 = stick - s1

      if s1 > 1 then
        tmp.push(s1)
      end
      if s2 > 1 then
        tmp.push(s2)
      end

      if queue.size == 0 then
        break
      end
    end
    queue += tmp
    count += 1
  end

  return count
end

puts cutting_stick(8, 3)
puts cutting_stick(20, 3)
puts cutting_stick(100, 5)

def cutting_stick2(len, people)
  count = 0
  start = 1
  while start < len do
    start += start < people ? start : people
    count += 1
  end
  return count
end

puts cutting_stick2(8, 3)
puts cutting_stick2(20, 3)
puts cutting_stick2(100, 5)
