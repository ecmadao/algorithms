=begin
考拉兹猜想：
对自然数 n 进行如下操作：
1. n 是偶数时，用 n 除以 2
2. n 是奇数时，用 n 乘以 3 再加 1

假设在初始值为偶数时，在第一次转换时，首先乘以 3 再加 1
例如，
4 -> 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4

先求出小于 10000 的偶数中能够回到初始值的数
=end

def collatz(num)
  raw = num
  num = num * 3 + 1

  while true do
    return true unless num != raw
    return false unless num != 1
    num = num % 2 == 0 ? (num / 2) : (num * 3 + 1)
  end
end

def collatz_problem(from, to, step)
  count = 0

  from.step(to, step).each do |num|
    if collatz(num) then
      count += 1
    end
  end
  puts "count: #{count}"
  return count
end

collatz_problem(0, 4, 2)
collatz_problem(0, 10000, 2)
