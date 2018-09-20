=begin
兑换硬币，已知可用的硬币面额分别为 10元，50元，100元，500元
兑换的硬币总数不能超过 15 个
求将 m 元纸币兑换为硬币的组合（假设一定能够兑换成功）
=end

def coins(money, denominations, num)
  return 1 unless money > 0
  return 0 unless denominations.size > 0
  return 0 unless num < 15
  return 0 unless money >= denominations[0]

  count = 0
  denomination = denominations[0]

  ([money / denomination, 15].min).downto(0).each do |i|
    if i + num <= 15 then
      count += coins(money - i * denomination, denominations.slice(1, denominations.size), i + num)
    end
  end
  return count
end

def exchange_coins(money, denominations = [10, 50, 100, 500])
  denominations.sort!
  return coins(money, denominations, 0)
end

puts exchange_coins(1000, [100, 500]) # 3
puts exchange_coins(1000, [10, 50, 100, 500]) # 20