=begin
5 kyu

Description:
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
-- should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
=end


def max_sequence(arr)
  max = 0
  sum = 0
  arr.each_with_index do |num, index|
    if sum > 0 then
      sum += num
    else
      sum = num
    end
    max = [max, sum, 0].max
  end
  return max
end

# 9 * 9 * 9 * 9 * 9
# 9 -> 1 -> 9 -> 1 -> 9

# 2 2 2 2 2
# 4 -> 8 -> 6 -> 2
