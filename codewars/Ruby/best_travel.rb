=begin
5 kyu

Description:
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60].
John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns,
they will choose so that the sum of the distances is the biggest possible to please Mary - but less than t - to please John- ?


Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.

Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)
ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
=end

def get_sum(ls, index, k, max, pre)
  result = nil
  while index < ls.size do
    num = ls[index]
    if k == 1 then
      if pre + num <= max then
        if !result || pre + num > result then
          result = pre + num
        end
      end
    elsif pre + num < max then
      tmp = get_sum(ls, index + 1, k - 1, max, pre + num)
      if !result || (tmp && tmp > result) then
        result = tmp
      end
    end
    index += 1
  end
  return result
end

def choose_best_sum(t, k, ls)
  return nil unless k >= 1 || ls.size < k
  return get_sum(ls, 0, k, t, 0)
end

=begin
Ruby 自带 combination 方法，通过数组形成任意数量元素组成的组合

a = [1, 2, 3, 4]
a.combination(1).to_a  #=> [[1],[2],[3],[4]]
a.combination(2).to_a  #=> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
a.combination(3).to_a  #=> [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
a.combination(4).to_a  #=> [[1,2,3,4]]
a.combination(0).to_a  #=> [[]] # one combination of length 0
a.combination(5).to_a  #=> []   # no combinations of length 5
=end

def choose_best_sum2(t, k, ls)
  return nil unless k >= 1 || ls.size < k
  return ls.combination(k).map { |arr| arr.inject(:+) }.select { |num| num <= t }.max
end

# Test case
ts = [50, 55, 57, 58, 60]
puts choose_best_sum2(174, 3, ts)

ts = [50, 55, 56, 57, 58]
puts choose_best_sum2(163, 3, ts)

ts = [50]
puts choose_best_sum2(163, 3, ts)

ts = [91, 74, 73, 85, 73, 81, 87]
puts choose_best_sum2(230, 3, ts)
