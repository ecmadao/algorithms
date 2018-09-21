=begin
Difficulty:
Easy

Desc:
Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Example:
Input: [1,3,5,6], 5
Output: 2

Input: [1,3,5,6], 2
Output: 1

Input: [1,3,5,6], 7
Output: 4

Input: [1,3,5,6], 0
Output: 0
=end

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
  return 0 unless nums.size > 0
  return 0 unless nums[0] < target
  return nums.size unless nums[-1] >= target
  return nums.size - 1 unless nums[-1] > target

  nums.each_with_index do |num, index|
    return index unless num != target
    if num < target && nums[index + 1] > target then
      return index + 1
    end
  end
end

puts search_insert([1,3,5,6], 5)
puts search_insert([1,3,5,6], 2)
puts search_insert([1,3,5,6], 7)
puts search_insert([1,3,5,6], 0)
