=begin
一个扫地机器人，每次可以向自己所在位置的四个方向走一个各自，已走过的格子不能再走
求如果走 N 次，则有多少种走法
=end

def sweeping_robot(step, pos, tmp)
  return 1 unless step > 0
  count = 0

  [[0, 1], [0, -1], [1, 0], [-1, 0]].each do |dis|
    next_pos = [pos[0] + dis[0], pos[1] + dis[1]]
    if !tmp.include?(next_pos) then
      count += sweeping_robot(step - 1, next_pos, tmp + [next_pos])
    end
  end
  return count
end

puts sweeping_robot(3, [0, 0], [[0, 0]])
puts sweeping_robot(12, [0, 0], [[0, 0]])
